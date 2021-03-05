import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movieForm: FormGroup
  submitted = false
  @ViewChild('fileInput') el: ElementRef;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.createMovieForm()
  }

  uploadFile(event) {
    if (event.target.files && event.target.files[0]) {
        this.movieForm.patchValue({
          Poster: event.target.files[0]
        });    
    }
  }

  createMovieForm() {
      this.movieForm = this.fb.group({
        MovieName: ['', Validators.required],
        Poster: [null],
        Description: ['', Validators.required],
        MovieYear: ['', Validators.required],
        Directors: ['', Validators.required],
        ReleaseDate: ['', Validators.required]
    })
  }

  editMovie() {
    this.submitted = true
    if(this.movieForm.invalid) return
    console.log(this.movieForm.value)
  }

  get getMovieForm() {
    return this.movieForm.controls 
  }

}
