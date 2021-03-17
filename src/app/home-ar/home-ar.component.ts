import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../contact-us/contact-us.service';
import { DataLayerService } from '../datalayer/datalayer.service';
import Swal from 'sweetalert2';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component ({
  selector: 'app-home-ar',
  templateUrl: './home-ar.component.html',
  styleUrls: ['./home-ar.component.scss']
})
export class HomeArComponent implements OnInit {
  updateForm: FormGroup;
  submitted: boolean;

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
    margin:15,
    dots: true,
    center:true,
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

  isFieldValid(field: string): boolean {
    return !this.updateForm.get (field).valid && this.updateForm.get (field).touched;
  }

  // tslint:disable-next-line:typedef
  setDataLayer() {
    const layer = {
      event: 'formSubmited',
    };
    // Measure the removal of a product from a shopping cart.
    this.dataLayer.setDataLayer (layer);
  }

  onSubmit(): void {
    if ( this.updateForm.valid ) {
      this.setDataLayer ();
      this.submitted = true;
      const popup = {
        title: 'تم إرسال استفسارك بنجاح',
        text: 'سنتواصل معك بأقرب وقت ممكن',
        button: 'تم',
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

  scrollTo(el: HTMLElement): void {
    el.scrollIntoView ({behavior: 'smooth'});
    console.log (el);
  }
}
