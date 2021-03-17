import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../contact-us/contact-us.service';
import Swal from 'sweetalert2';
import { DataLayerService } from '../datalayer/datalayer.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare let $: any;

@Component ({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.scss']
})

export class HomeEnComponent implements OnInit,AfterViewInit {
  updateForm: FormGroup;
  submitted: boolean;


  ngAfterViewInit(){
    $('.owl-carousels').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin:15,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    center: true,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(private builder: FormBuilder, private contactService: ContactUsService, private dataLayer: DataLayerService) {
  }
ngOnInit(): void {
  this.initForm ();
}
isFieldValid(field: string): boolean {
  return !this.updateForm.get (field).valid && this.updateForm.get (field).touched;
} 
initForm(): void {
  this.updateForm = this.builder.group (
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength (11)]],
      notes: ['', [Validators.required, Validators.minLength (20)]],
    },
    onblur
  );
}
  // tslint:disable-next-line:typedef
  setDataLayer() {
    const layer = {
      event: 'formSubmited',
    };
    // Measure the removal of a product from a shopping cart.
    this.dataLayer.setDataLayer (layer);
  }


  scrollTo(el: HTMLElement): void {
    el.scrollIntoView ({behavior: 'smooth'});
  }
  onSubmit(): void {
    if ( this.updateForm.valid ) {
      this.setDataLayer ();
      this.submitted = true;
      const popup = {
        title: 'Your inquiry has been sent successfully',
        text: 'We will contact you as soon as possible',
        button: 'Done',
      };

      this.contactService.sendMail (this.updateForm.value).subscribe (
        () => {
          Swal.fire ({
            title: popup.title,
            text: popup.text,
            icon: 'success',
            confirmButtonText: popup.button,
          }).then (() => {
            this.submitted = false;
            this.updateForm.reset ();
          });
        },
        (err) => {
          console.log (err);
          this.submitted = false;
        }
      );
    }
  }
}
