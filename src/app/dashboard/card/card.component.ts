import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card; // Objeto card
  cards: Array<any>

  private urlApi = 'api/skills';  // URL da api skills
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // Função de Like
  onLike(card: any) {
    
    let newObject: any
    card.likes++
    newObject = card // novo objeto

    this.http.put(`${this.urlApi}/${card.id}`, newObject, this.httpOptions).subscribe(
      success => {
        // 
      },
      error => {
        alert('Ocorreu um erro!')
      }
    );
  }

  // Botão de compartilhar
  onShare(linkedin: string){
    window.open(linkedin, "_blank");
  }

}
