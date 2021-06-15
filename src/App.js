import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


class layout extends React.Component {
  hg;
  rd=0;
  arr=[];
  index=0;
  goticode='';
  idd='';
  turn='white';
  ste=true;
  whitearray=['♔', '♕', '♖', '♗', '♘', '♙'];
  blackarray=['♚', '♛', '♜', '♝', '♞', '♟'];
  back='';
  ji=0;


  

  clk = (e) => {
    this.checkmate();
    this.check();
    const arr_white = ['♔', '♕', '♖', '♗', '♘', '♙'];
    const arr_black = ['♚', '♛', '♜', '♝', '♞', '♟'];
    var bd = document.getElementById(e.target.id).innerHTML;
    if (arr_black.includes(bd) && this.index == 0){
      this.arr= arr_black;
      for(var f=0;f<=63;f++)
      document.getElementsByClassName('box1')[f].innerHTML = document.getElementsByClassName('box')[f].innerHTML;
    }
    else if (this.index == 0){
      this.arr= arr_white;
      for(var f=0;f<=63;f++)
      document.getElementsByClassName('box1')[f].innerHTML = document.getElementsByClassName('box')[f].innerHTML;
    }

    if (bd != '' && this.index == 0) {
      var i;
      for (i = 0; i <= 63; i++) {
        document.getElementsByClassName('box')[i].style.color = "black";
        document.getElementsByClassName('box')[i].style.border = "1px black solid";
      }
      var goti = document.getElementById(e.target.id).innerHTML;
      var id = document.getElementById(e.target.id);
      if (this.turn == 'white' && arr_white.includes(goti)) {
        this.goticode= goti; this.idd= e.target.id; this.index= 1; this.turn= 'black';
        id.style.color = "red";
        goti == '♙' ? this.pawn(e.target.id) : goti = goti;
        goti == '♖' || goti == '♜' ? this.rook(e.target.id) : goti = goti;
        goti == '♗' || goti == '♝' ? this.bishop(e.target.id) : goti = goti;
        goti == '♕' || goti == '♛' ? this.queen(e.target.id) : goti = goti;
        goti == '♘' || goti == '♞' ? this.knight(e.target.id) : goti = goti;
        goti == '♔' || goti == '♚' ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++) {
          if (document.getElementsByClassName('box')[i].style.border == "1px solid red" && this.blackarray.includes(document.getElementsByClassName('box')[i].innerHTML) == true)
            document.getElementsByClassName('box')[i].style.color = "blue";
        }
      }
      else if (this.turn == 'black' && arr_black.includes(goti)) {
        this.goticode= goti; this.idd= e.target.id; this.index= 1; this.turn= 'white';

        id.style.color = "red";
        goti == '♟' ? this.blkpawn(e.target.id) : goti = goti;
        goti == '♖' || goti == '♜' ? this.rook(e.target.id) : goti = goti;
        goti == '♗' || goti == '♝' ? this.bishop(e.target.id) : goti = goti;
        goti == '♕' || goti == '♛' ? this.queen(e.target.id) : goti = goti;
        goti == '♘' || goti == '♞' ? this.knight(e.target.id) : goti = goti;
        goti == '♔' || goti == '♚' ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++) {
          if (document.getElementsByClassName('box')[i].style.border == "1px solid red" && this.whitearray.includes(document.getElementsByClassName('box')[i].innerHTML) == true)
            document.getElementsByClassName('box')[i].style.color = "blue";
        }
      }
      else
        alert('invalid move');
    }
    else if ((this.index == 1) && (bd != '') && (document.getElementById(e.target.id).style.color != 'red')) {
      if (this.arr.includes(bd) != true) {
        if ((this.idd || this.goticode) != '' && document.getElementById(e.target.id).style.border == '1px solid red') {
          var hp = document.getElementById(e.target.id);
          hp.innerHTML = this.goticode;
          document.getElementById(this.idd).innerHTML = '';
          this.goticode= ''; this.idd= ''; this.index= 0;
          for (i = 0; i <= 63; i++) {
            document.getElementsByClassName('box')[i].style.color = "black";
            document.getElementsByClassName('box')[i].style.border = "1px black solid";
            this.ste= false;

          }
        }
      }
      else {
        var j;
        for (j = 0; j <= 63; j++) {
          document.getElementsByClassName('box')[j].style.color = "black";
          document.getElementsByClassName('box')[j].style.border = "1px black solid";
        }
        var goti = document.getElementById(e.target.id).innerHTML;
        this.goticode= goti; this.idd= e.target.id; this.index= 1;
        var iddf = document.getElementById(e.target.id);
        iddf.style.color = "red";
        goti == '♙' ? this.pawn(e.target.id) : goti = goti;
        goti == '♟' ? this.blkpawn(e.target.id) : goti = goti;
        goti == '♖' || goti == '♜' ? this.rook(e.target.id) : goti = goti;
        goti == '♗' || goti == '♝' ? this.bishop(e.target.id) : goti = goti;
        goti == '♕' || goti == '♛' ? this.queen(e.target.id) : goti = goti;
        goti == '♘' || goti == '♞' ? this.knight(e.target.id) : goti = goti;
        goti == '♔' || goti == '♚' ? this.king(e.target.id) : goti = goti;

        for (i = 0; i <= 63; i++)
          if (document.getElementsByClassName('box')[i].style.border == "1px solid red" && document.getElementsByClassName('box')[i].innerHTML != '' && this.arr.includes(document.getElementsByClassName('box')[i].innerHTML) == false)
            document.getElementsByClassName('box')[i].style.color = "blue";
      }
    }
    else if (bd == ''  && document.getElementById(e.target.id).style.border == '1px solid red') {
      if ((this.idd || this.goticode) != '') {
        document.getElementById(e.target.id).innerHTML = this.goticode;
        document.getElementById(this.idd).innerHTML = '';
        this.goticode= ''; this.idd= ''; this.index= 0;
        for (j = 0; j <= 63; j++) {
          document.getElementsByClassName('box')[j].style.color = "black";
          document.getElementsByClassName('box')[j].style.border = "1px black solid";
        }
        this.ste= false;
      }
    }
    // this.checkmate();
    this.check();    
  }


  pawn = (id) => {
    var pawn1 = document.getElementById(id).innerHTML;
      
      if (pawn1 == '♙') {
      var p4 = parseInt(id.substring(1));
      var n = id.charCodeAt(0);

      if(n !=97)
      if (document.getElementById(`${String.fromCharCode(n - 1) + p4}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(n - 1) + p4}`).style.border = '1px solid red';

      if (p4 != 8 && n != 97)
        if (document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).innerHTML != ''  &&this.arr.includes(document.getElementById(id).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).innerHTML))
          document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).style.border = '1px solid red';
      
      if (p4 != 1 && n != 97)
        if (document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).innerHTML != ''  &&this.arr.includes(document.getElementById(id).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).innerHTML))
          document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).style.border = '1px solid red';
        
      if(n == 103)  
        if(document.getElementById(`${String.fromCharCode(n - 1)+p4}`).innerHTML == '' && document.getElementById(`${String.fromCharCode(n - 2)+p4}`).innerHTML == ''){
          document.getElementById(`${String.fromCharCode(n-1)+p4}`).style.border = "1px solid red";
          document.getElementById(`${String.fromCharCode(n - 2)+p4}`).style.border = "1px solid red";
        }
     }  
     this.checktime(id);
      this.checkdanger(id);
  }

  blkpawn = (id) => {

    var pawn1 = document.getElementById(id).innerHTML;
    
    if (pawn1 == '♟') {
      var p4 = parseInt(id.substring(1));
      var n = id.charCodeAt(0);

      if(n !=104)
      if (document.getElementById(`${String.fromCharCode(n + 1) + p4}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(n + 1) + p4}`).style.border = '1px solid red';

      if (p4 != 8 && n != 104)
        if (document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).innerHTML != ''  &&this.arr.includes(document.getElementById(id).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).innerHTML))
          document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).style.border = '1px solid red';
      
      if (p4 != 1 && n != 104)
        if (document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).innerHTML != ''  &&this.arr.includes(document.getElementById(id).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).innerHTML))
          document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).style.border = '1px solid red';
        
      if(n == 98)  
        if(document.getElementById(`${String.fromCharCode(n + 1)+p4}`).innerHTML == '' && document.getElementById(`${String.fromCharCode(n + 2)+p4}`).innerHTML == ''){
          document.getElementById(`${String.fromCharCode(n+1)+p4}`).style.border = "1px solid red";
          document.getElementById(`${String.fromCharCode(n + 2)+p4}`).style.border = "1px solid red";
        }
     }
     this.checktime(id);
      this.checkdanger(id);

  }


  rook = (id) => {

    var rook1 = id;
    var rookn = rook1.substring(1);
    var rooka = rook1.charCodeAt(0);
    var rookalphabet1 = String.fromCharCode(rooka);
    var rookalphabetm = String.fromCharCode(rooka - 1);
    var rookalphabetp = String.fromCharCode(rooka + 1);
    var i = parseInt(rookn);
    i = i + 1;
    while (i <= 8) {
      if (document.getElementById(`${rookalphabet1 + i}`).innerHTML == '')
        document.getElementById(`${rookalphabet1 + i}`).style.border = "1px solid red";

      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML))
        break;

      else
        document.getElementById(`${rookalphabet1 + i}`).style.border = "1px solid red";

      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '')
        break;
      i++;
    }

    i = parseInt(rookn);
    i = i - 1;
    while (i >= 1) {
      if (document.getElementById(`${rookalphabet1 + i}`).innerHTML == '')
        document.getElementById(`${rookalphabet1 + i}`).style.border = "1px solid red";

      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML))
        break;

      else
        document.getElementById(`${rookalphabet1 + i}`).style.border = "1px solid red";

      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '')
        break;
      i--;
    }

    var jk = rookalphabetm.charCodeAt(0);
    jk = jk + 1;
    var j = rookalphabetm;
    while (j >= String.fromCharCode(97)) {
      if (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML))
        break;

      else
        document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML != '')
        break;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }

    jk = rookalphabetp.charCodeAt(0);
    jk = jk - 1;
    var j = rookalphabetp;
    while (j <= String.fromCharCode(104)) {
      if (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML))
        break;

      else
        document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML != '')
        break;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }
    this.checktime(id);
    this.checkdanger(id);
  }

  
  bishop = (id) => {
    var bishop1 = id;
    var bishopnum = bishop1.substring(1);
    var bishopa = bishop1.charCodeAt(0);
    var bishopalphabetm = String.fromCharCode(bishopa - 1);
    var bishopalphabetp = String.fromCharCode(bishopa + 1);

    var jk = bishopalphabetm.charCodeAt(0);
    jk = jk + 1;
    var bishopn = parseInt(bishopnum);
    bishopn += 1;
    var j = bishopalphabetm;
    while (j >= String.fromCharCode(97)) {
      if (bishopn > 8)
        break;

      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML))
        break;
      else
        document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '')
        break;
      bishopn++;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }

    jk = bishopalphabetp.charCodeAt(0);
    jk = jk - 1;
    var bishopn = parseInt(bishopnum);
    bishopn -= 1;
    var j = bishopalphabetp;
    while (j <= String.fromCharCode(104)) {
      if (bishopn < 1)
        break;

      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML))
        break;
      else
        document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.border = "1px solid red";

      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '')
        break;
      bishopn--;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }

    var jk = bishopalphabetm.charCodeAt(0);
    jk = jk + 1;
    var bishopn = parseInt(bishopnum);
    bishopn -= 1;
    var j = bishopalphabetm;
    while (j >= String.fromCharCode(97)) {
      if (bishopn < 1)
        break;
      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.border = "1px solid red";
      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML))
        break;

      else
        document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.border = "1px solid red";
      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '')
        break;
      bishopn--;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }


    jk = bishopalphabetp.charCodeAt(0);
    jk = jk - 1;
    var bishopn = parseInt(bishopnum);
    bishopn += 1;
    var j = bishopalphabetp;
    while (j <= String.fromCharCode(104)) {
      if (bishopn > 8)
        break;
      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '')
        document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.border = "1px solid red";
      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML))
        break;

      else
        console.log('i m not');
      document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.border = "1px solid red";
      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '')
        break;
      bishopn++;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }
    this.checktime(id);
    this.checkdanger(id);
  }

  queen = (id) => {
    this.rook(id);
    this.bishop(id);
  }

  knight = (id) => {
    var knight1 = id;
    var knightnum = knight1.substring(1);
    var knightacode = knight1.charCodeAt(0);
    var knightacode1 = knightacode;
    var knightnum1 = knightnum;

    if (knightacode1 == 97 || knightacode1 == 98)
      console.log();
    else {
      knightacode1 -= 2;
      var knightalphabet2 = String.fromCharCode(knightacode1);
      knightnum1 = parseInt(knightnum1);
      if (knightnum1 != 1) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML))
          console.log();
        else
          document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).style.border = '1px solid red';
      }

      if (knightnum1 != 8) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML))
          console.log();
        else
          document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).style.border = '1px solid red';
      }
    }

    knightacode1 = knightacode;
    knightnum1 = knightnum;
    if (knightacode1 == 104 || knightacode1 == 103) { console.log(); }
    else {
      knightacode1 += 2;
      var knightalphabet2 = String.fromCharCode(knightacode1);
      knightnum1 = parseInt(knightnum1);
      if (knightnum1 != 1) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML))
          console.log();
        else
          document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).style.border = '1px solid red';
      }

      if (knightnum1 != 8) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML))
          console.log();
        else
          document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).style.border = '1px solid red';
      }
    }


    knightacode1 = knightacode;
    knightnum1 = parseInt(knightnum);
    if (knightnum1 == 8 || knightnum1 == 7) { console.log(); }
    else {
      knightnum1 += 2;
      if (knightacode1 != 97) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML))
          console.log();
        else
          document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).style.border = '1px solid red';
      }

      if (knightacode1 != 104) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML))
          console.log();
        else
          document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).style.border = '1px solid red';
      }
    }


    knightacode1 = knightacode;
    knightnum1 = parseInt(knightnum);
    if (knightnum1 == 1 || knightnum1 == 2)
      console.log();
    else {
      knightnum1 -= 2;
      if (knightacode1 != 97) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML))
          console.log();
        else
          document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).style.border = '1px solid red';
      }

      if (knightacode1 != 104) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML))
          console.log();
        else
          document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).style.border = '1px solid red';
      }
    }
  
    this.checktime(id);
    this.checkdanger(id);
  }

  checktime =(id) =>{
      for(var i=0;i<=63;i++)
      {
        if(document.getElementsByClassName('box')[i].innerHTML == '♔' || document.getElementsByClassName('box')[i].innerHTML == '♚'){
          if(this.arr.includes(document.getElementsByClassName('box')[i].innerHTML)){
              console.log('passed');
              if(document.getElementsByClassName('box')[i].style.color == 'yellow')
              {
                  // var kcolor = document.getElementsByClassName('box')[i].style.color; 
                  for(var o=0;o<=63;o++)
                  {
                    if(document.getElementsByClassName('box')[o].style.color == 'blue' && document.getElementsByClassName('box')[o].innerHTML != ''){
                      var ikd =document.getElementsByClassName('box')[o].id;
                      var ik =document.getElementById(ikd).innerHTML;
                      document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
                      document.getElementById(id).innerHTML = '';
                     
                      this.check();

                      if(document.getElementsByClassName('box')[i].style.color == 'black'){
                        document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                        document.getElementById(ikd).innerHTML = ik;
                        document.getElementById(ikd).style.color = 'black';
                        document.getElementsByClassName('box')[i].style.color = 'yellow';
                        this.hg++;
                      }
                      else if(document.getElementsByClassName('box')[i].style.color == 'yellow'){
                        document.getElementById(ikd).style.border = '1px solid black';
                        document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                        document.getElementById(ikd).innerHTML =ik;
                        document.getElementById(ikd).style.color ='black';
                      }
                    }

                    else if(document.getElementsByClassName('box')[o].style.border == '1px solid red'){
                      var ikd =document.getElementsByClassName('box')[o].id;
                      var ik =document.getElementById(ikd).innerHTML;
                      document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
                      document.getElementById(id).innerHTML = '';
                      
                      this.check();
                      
                      if(document.getElementsByClassName('box')[i].style.color == 'black'){
                        document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                        document.getElementById(ikd).innerHTML =ik;
                        document.getElementsByClassName('box')[i].style.color = 'yellow';
                        this.hg++;
                      }
                      else if(document.getElementsByClassName('box')[i].style.color == 'yellow'){
                        document.getElementById(ikd).style.border = '1px solid black';
                        document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                      document.getElementById(ikd).innerHTML =ik;
                      }
                    }

                    // if(document.getElementsByClassName('box')[o].innerHTML != document.getElementsByClassName('box')[i].innerHTML  && document.getElementsByClassName('box')[o].style.color == 'yellow')
                    //   document.getElementsByClassName('box')[o].style.color = 'black';

                    //   if(document.getElementsByClassName('box')[i].innerHTML == '♔')
                    //       for(var p=0;p<=63;p++)
                    //         if(document.getElementsByClassName('box')[p].innerHTML == '♚')
                    //           document.getElementsByClassName('box')[p].style.color = 'black';
                      
                    //   else if(document.getElementsByClassName('box')[i].innerHTML == '♚')
                    //       for(var p=0;p<=63;p++)
                    //         if(document.getElementsByClassName('box')[p].innerHTML == '♔')
                    //           document.getElementsByClassName('box')[p].style.color = 'black';
                      
                  }
              }
            }              
        }
      }      
    }

  king = (id) => {
    // document.getElementById(id).style.border = '1px solid green';
    var king1 = id;
    var kingnum = parseInt(king1.substring(1));
    var kingacode = parseInt(king1.charCodeAt(0));
    if(kingacode != 97){
    if(!(document.getElementById(`${String.fromCharCode(kingacode-1)+kingnum}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode-1)+kingnum}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode-1)+kingnum}`).style.border = "1px solid red"; 
    
    if(kingnum != 8)
    if(!(document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum+1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum+1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum+1)}`).style.border = "1px solid red"; 
    
    if(kingnum != 1)
    if(!(document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum-1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum-1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode-1)+(kingnum-1)}`).style.border = "1px solid red"; 
    }
    if(kingnum != 1)
    if(!(document.getElementById(`${String.fromCharCode(kingacode)+(kingnum-1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode)+(kingnum-1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode)+(kingnum-1)}`).style.border = "1px solid red"; 
    
    if(kingnum != 8)
    if(!(document.getElementById(`${String.fromCharCode(kingacode)+(kingnum+1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode)+(kingnum+1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode)+(kingnum+1)}`).style.border = "1px solid red"; 
    
    if(kingacode != 104){
    if(!(document.getElementById(`${String.fromCharCode(kingacode+1)+kingnum}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode+1)+kingnum}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode+1)+kingnum}`).style.border = "1px solid red"; 
    
    if(kingnum != 8)
    if(!(document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum+1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum+1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum+1)}`).style.border = "1px solid red"; 
    
    if(kingnum != 1)
    if(!(document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum-1)}`).innerHTML != '' && this.arr.includes(document.getElementById(id).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum-1)}`).innerHTML)))
    document.getElementById(`${String.fromCharCode(kingacode+1)+(kingnum-1)}`).style.border = "1px solid red"; 
    }

  this.checkking(id);
   
  }

  checkking =(id)=>{
    for(var o=0;o<=63;o++)
    {
      if(document.getElementsByClassName('box')[o].style.border == '1px solid red'){
        var ikd =document.getElementsByClassName('box')[o].id;
        var iki = document.getElementById(ikd).innerHTML;
        document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = '';
        this.check();
        if(document.getElementById(ikd).style.color == 'yellow')
        {
          document.getElementById(ikd).style.border ='1px solid black';
          document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
          document.getElementById(ikd).innerHTML = iki;
          document.getElementById(ikd).style.color = 'black';
        }
        else{
          this.hg++;
          document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
          document.getElementById(ikd).innerHTML = iki;
          document.getElementById(ikd).style.color = 'black';
         }
      }
    }
  }

  checkdanger =(id)=>{

    for(var d=0;d<=63;d++)
    {
        if(document.getElementsByClassName('box')[d].innerHTML == '♔' || document.getElementsByClassName('box')[d].innerHTML == '♚')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[d].innerHTML)){
            for(var o=0;o<=63;o++)
            {
              if(document.getElementsByClassName('box')[o].style.border == '1px solid red'){
                var ikd =document.getElementsByClassName('box')[o].id;
                var previouscoin = document.getElementById(ikd).innerHTML;
                
                document.getElementById(ikd).innerHTML = document.getElementById(id).innerHTML;
                document.getElementById(id).innerHTML = '';
                this.check();
                if(document.getElementsByClassName('box')[d].style.color == 'yellow')
                {
                  document.getElementById(ikd).style.border ='1px solid black';
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = previouscoin;
                }
                else{
                  document.getElementById(id).innerHTML = document.getElementById(ikd).innerHTML;
                  document.getElementById(ikd).innerHTML = previouscoin;
                }
              
              }                     
            }
        }
    }
  }
}

  checkrook= (rook1) =>{
    var rookn = rook1.substring(1);
    var rooka = rook1.charCodeAt(0);
    var rookalphabet1 = String.fromCharCode(rooka);
    var rookalphabetm = String.fromCharCode(rooka - 1);
    var rookalphabetp = String.fromCharCode(rooka + 1);
    var i = parseInt(rookn);
    i = i + 1;
    while (i <= 8) {
      
      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) == this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML))
        break;
      else if(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) != this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML) && (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML == '♔' || document.getElementById(`${rookalphabet1 + (i)}`).innerHTML == '♚')){
        document.getElementById(`${rookalphabet1 + i}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '')
        break;
      i++;
    }

    i = parseInt(rookn);
    i = i - 1;
    while (i >= 1) {
      
      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) == this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML))
        break;
      else if(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) != this.arr.includes(document.getElementById(`${rookalphabet1 + (i)}`).innerHTML) && (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML == '♔' || document.getElementById(`${rookalphabet1 + (i)}`).innerHTML == '♚'))
      {  
      document.getElementById(`${rookalphabet1 + i}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${rookalphabet1 + (i)}`).innerHTML != '')
        break;
      i--;
    }

    var jk = rookalphabetm.charCodeAt(0);
    jk = jk + 1;
    var j = rookalphabetm;
    while (j >= String.fromCharCode(97)) {
      
      if (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML))
        break;

      else if(document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML == '♚'))
      {  
        document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk - 1) + rookn}`).innerHTML != '')
        break;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }

    jk = rookalphabetp.charCodeAt(0);
    jk = jk - 1;
    var j = rookalphabetp;
    while (j <= String.fromCharCode(104)) {
      
      if (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML))
        break;

      else if(document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML != '' && this.arr.includes(document.getElementById(rook1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML == '♚'))
      {  
      document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk + 1) + rookn}`).innerHTML != '')
        break;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }
    
    if(this.rd == 0)
      for(var rt=0;rt<=63;rt++)
          if(document.getElementsByClassName('box')[rt].innerHTML == '♔' || document.getElementsByClassName('box')[rt].innerHTML == '♚' && document.getElementsByClassName('box')[rt].style.color == 'yellow')
            document.getElementsByClassName('box')[rt].style.color = 'black';
  }

  checkbishop = (bishop1) => {
    var bishopnum = bishop1.substring(1);
    var bishopa = bishop1.charCodeAt(0);
    var bishopalphabetm = String.fromCharCode(bishopa - 1);
    var bishopalphabetp = String.fromCharCode(bishopa + 1);

    var jk = bishopalphabetm.charCodeAt(0);
    jk = jk + 1;
    var bishopn = parseInt(bishopnum);
    bishopn += 1;
    var j = bishopalphabetm;
    while (j >= String.fromCharCode(97)) {
      if (bishopn > 8)
        break;

      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML))
        break;
      else if(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '♚'))
      {  
          document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.color = "yellow";
          this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '')
        break;
      bishopn++;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }

    jk = bishopalphabetp.charCodeAt(0);
    jk = jk - 1;
    var bishopn = parseInt(bishopnum);
    bishopn -= 1;
    var j = bishopalphabetp;
    while (j <= String.fromCharCode(104)) {
      if (bishopn < 1)
        break;

      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML))
        break;
      else if(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '♚'))
      {  
        document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '')
        break;
      bishopn--;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }

    var jk = bishopalphabetm.charCodeAt(0);
    jk = jk + 1;
    var bishopn = parseInt(bishopnum);
    bishopn -= 1;
    var j = bishopalphabetm;
    while (j >= String.fromCharCode(97)) {
      if (bishopn < 1)
        break;
     
        if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML))
        break;
      else if(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML == '♚'))
      {
        document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk - 1) + bishopn}`).innerHTML != '')
        break;
      bishopn--;
      jk = jk - 1;
      j = String.fromCharCode(jk - 1);
    }


    jk = bishopalphabetp.charCodeAt(0);
    jk = jk - 1;
    var bishopn = parseInt(bishopnum);
    bishopn += 1;
    var j = bishopalphabetp;
    while (j <= String.fromCharCode(104)) {
      if (bishopn > 8)
        break;

      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) == this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML))
        break;
      else if(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '' && this.arr.includes(document.getElementById(bishop1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML) && (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '♔' || document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML == '♚'))
      {
        document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).style.color = "yellow";
        this.rd++;
      }
      if (document.getElementById(`${String.fromCharCode(jk + 1) + bishopn}`).innerHTML != '')
        break;
      bishopn++;
      jk = jk + 1;
      j = String.fromCharCode(jk + 1);
    }

    if(this.rd == 0)
      for(var rt=0;rt<=63;rt++)
          if(document.getElementsByClassName('box')[rt].innerHTML == '♔' || document.getElementsByClassName('box')[rt].innerHTML == '♚' && document.getElementsByClassName('box')[rt].style.color == 'yellow')
            document.getElementsByClassName('box')[rt].style.color = 'black';
  }

  checknight = (knight1) => {
    var knightnum = knight1.substring(1);
    var knightacode = knight1.charCodeAt(0);
    var knightacode1 = knightacode;
    var knightnum1 = knightnum;

    if (knightacode1 == 97 || knightacode1 == 98)
      console.log();
    else {
      knightacode1 -= 2;
      var knightalphabet2 = String.fromCharCode(knightacode1);
      knightnum1 = parseInt(knightnum1);
      if (knightnum1 != 1) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML))
          console.log();
        else if(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML) && (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML == '♔' || document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML == '♚'))
        {  
          document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).style.color = 'yellow';
          this.rd++;
        }
      }

      if (knightnum1 != 8) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML))
          console.log();
        else if(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML) && (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML == '♔' || document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML == '♚'))
        { 
          document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).style.color = 'yellow';
          this.rd++;
        }
      }
    }

    knightacode1 = knightacode;
    knightnum1 = knightnum;
    if (knightacode1 == 104 || knightacode1 == 103) { console.log(); }
    else {
      knightacode1 += 2;
      var knightalphabet2 = String.fromCharCode(knightacode1);
      knightnum1 = parseInt(knightnum1);
      if (knightnum1 != 1) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML))
          console.log();
        else if(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML) && (document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML == '♔' || document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).innerHTML == '♚'))
        {  
          document.getElementById(`${knightalphabet2 + (knightnum1 - 1)}`).style.color = 'yellow';
          this.rd++;
        }
      }

      if (knightnum1 != 8) {
        if (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML))
          console.log();
        else if(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML) && (document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML == '♔' || document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).innerHTML == '♚'))
        {  
          document.getElementById(`${knightalphabet2 + (knightnum1 + 1)}`).style.color = 'yellow';
          this.rd++;
        }
      }
    }


    knightacode1 = knightacode;
    knightnum1 = parseInt(knightnum);
    if (knightnum1 == 8 || knightnum1 == 7) { console.log(); }
    else {
      knightnum1 += 2;
      if (knightacode1 != 97) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML))
          console.log();
        else if(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML) && (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML == '♔' || document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML == '♚'))
        { 
          document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).style.color = 'yellow';
          this.rd++;
        }
      }

      if (knightacode1 != 104) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML))
          console.log();
        else if(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML) && (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML == '♔' || document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML == '♚'))
        {
          document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).style.color = 'yellow';
          this.rd++;
        }
      }
    }


    knightacode1 = knightacode;
    knightnum1 = parseInt(knightnum);
    if (knightnum1 == 1 || knightnum1 == 2)
      console.log();
    else {
      knightnum1 -= 2;
      if (knightacode1 != 97) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML))
          console.log();
        else if(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML) && (document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML == '♔' || document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).innerHTML == '♚'))
        {  
          document.getElementById(`${(String.fromCharCode(knightacode1 - 1)) + knightnum1}`).style.color = 'yellow';
          this.rd++;
        }
      }

      if (knightacode1 != 104) {
        if (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) == this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML))
          console.log();
        else if(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML != '' && this.arr.includes(document.getElementById(knight1).innerHTML) != this.arr.includes(document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML) && (document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML == '♔' || document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).innerHTML == '♚'))
        {  
          document.getElementById(`${(String.fromCharCode(knightacode1 + 1)) + knightnum1}`).style.color = 'yellow';
          this.rd++;
        }
      }
    }

    if(this.rd == 0)
      for(var rt=0;rt<=63;rt++)
          if(document.getElementsByClassName('box')[rt].innerHTML == '♔' || document.getElementsByClassName('box')[rt].innerHTML == '♚' && document.getElementsByClassName('box')[rt].style.color == 'yellow')
            document.getElementsByClassName('box')[rt].style.color = 'black';
  }

  checkqueen = (queen1) => {
    this.checkrook(queen1);
    this.checkbishop(queen1);
  }

  checkpawn = (pawn1) => {
      var p4 = parseInt(pawn1.substring(1));
      var n = pawn1.charCodeAt(0);
      
      if (p4 != 8 && n != 97)
        if (document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).innerHTML == '♚'  &&this.arr.includes(document.getElementById(pawn1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).innerHTML))
        {  
          document.getElementById(`${String.fromCharCode(n - 1) + (p4 + 1)}`).style.color = 'yellow';
          this.rd++;
        }

      if (p4 != 1 && n != 97)
        if (document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).innerHTML == '♚'  &&this.arr.includes(document.getElementById(pawn1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).innerHTML))
        {  
          document.getElementById(`${String.fromCharCode(n - 1) + (p4 - 1)}`).style.color = 'yellow';  
          this.rd++;
        }

        if(this.rd == 0)
          for(var rt=0;rt<=63;rt++)
              if(document.getElementsByClassName('box')[rt].innerHTML == '♔' || document.getElementsByClassName('box')[rt].innerHTML == '♚' && document.getElementsByClassName('box')[rt].style.color == 'yellow')
                document.getElementsByClassName('box')[rt].style.color = 'black';
  }

  checkblkpawn = (blkpawn1) => {
    var p4 = parseInt(blkpawn1.substring(1));
      var n = blkpawn1.charCodeAt(0);
      
      if (p4 != 8 && n != 104)
        if (document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).innerHTML == '♔'  &&this.arr.includes(document.getElementById(blkpawn1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).innerHTML))
        {  
          document.getElementById(`${String.fromCharCode(n + 1) + (p4 + 1)}`).style.color = 'yellow';
          this.rd++;
        }
      if (p4 != 1 && n != 104)
        if (document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).innerHTML == '♔'  &&this.arr.includes(document.getElementById(blkpawn1).innerHTML) != this.arr.includes(document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).innerHTML))
        {  
          document.getElementById(`${String.fromCharCode(n + 1) + (p4 - 1)}`).style.color = 'yellow';
          this.rd++;
        }
       
        if(this.rd == 0)
          for(var rt=0;rt<=63;rt++)
              if(document.getElementsByClassName('box')[rt].innerHTML == '♔' || document.getElementsByClassName('box')[rt].innerHTML == '♚' && document.getElementsByClassName('box')[rt].style.color == 'yellow')
                document.getElementsByClassName('box')[rt].style.color = 'black';
  }

  check = () => {
    this.rd = 0;
    // var mate=0;
    for(var jj=0;jj<=63;jj++)
    {
        if(document.getElementsByClassName('box')[jj].innerHTML == '♖' || document.getElementsByClassName('box')[jj].innerHTML == '♜')
        {
          var rook1 = document.getElementsByClassName('box')[jj].id;
          this.checkrook(rook1);
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♗' || document.getElementsByClassName('box')[jj].innerHTML == '♝')
        {
          var bishop1 = document.getElementsByClassName('box')[jj].id;
          this.checkbishop(bishop1);
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♘' || document.getElementsByClassName('box')[jj].innerHTML == '♞')
        {
          var knight1 = document.getElementsByClassName('box')[jj].id;
          this.checknight(knight1);
          
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♕' || document.getElementsByClassName('box')[jj].innerHTML == '♛')
        {
          var queen1 = document.getElementsByClassName('box')[jj].id;
          this.checkqueen(queen1);
        }
        if(document.getElementsByClassName('box')[jj].innerHTML == '♙')
        {
          var pawn1 = document.getElementsByClassName('box')[jj].id;
          this.checkpawn(pawn1);
        }
        if(document.getElementsByClassName('box')[jj].innerHTML == '♟')
        {
          var blkpawn1 = document.getElementsByClassName('box')[jj].id;
          this.checkblkpawn(blkpawn1);
        }
    }
  }

  checkmate =() => {
    
    if(this.rd != 0){
      this.hg =0;
    for(var jj=0;jj<=63;jj++)
    {
        // console.log('hii i m mate');
        if(document.getElementsByClassName('box')[jj].innerHTML == '♖' || document.getElementsByClassName('box')[jj].innerHTML == '♜')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var rook1 = document.getElementsByClassName('box')[jj].id;
          this.rook(rook1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }       
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♗' || document.getElementsByClassName('box')[jj].innerHTML == '♝')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var bishop1 = document.getElementsByClassName('box')[jj].id;
          this.bishop(bishop1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }      
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♘' || document.getElementsByClassName('box')[jj].innerHTML == '♞')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var knight1 = document.getElementsByClassName('box')[jj].id;
          this.knight(knight1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }      
        }

        if(document.getElementsByClassName('box')[jj].innerHTML == '♕' || document.getElementsByClassName('box')[jj].innerHTML == '♛')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var queen1 = document.getElementsByClassName('box')[jj].id;
          this.queen(queen1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }     
        }
        if(document.getElementsByClassName('box')[jj].innerHTML == '♙')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var pawn1 = document.getElementsByClassName('box')[jj].id;
          this.pawn(pawn1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }     
        }
        if(document.getElementsByClassName('box')[jj].innerHTML == '♟')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var blkpawn1 = document.getElementsByClassName('box')[jj].id;
          this.blkpawn(blkpawn1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }     
        }
        if(document.getElementsByClassName('box')[jj].innerHTML == '♔' || document.getElementsByClassName('box')[jj].innerHTML == '♚')
        {
          if(this.arr.includes(document.getElementsByClassName('box')[jj].innerHTML)){
          var queen1 = document.getElementsByClassName('box')[jj].id;
          this.king(queen1);
          // for(var i=0;i<=63;i++)
          //   if(document.getElementsByClassName('box')[i].style.border =='1px solid red')
          //       this.hg++;
          }      
        }
      } 
      var jh=0;
      for(var i=0;i<=63;i++){
       if(document.getElementsByClassName('box')[i].style.border == '1px solid red' && this.arr.includes(document.getElementsByClassName('box')[i].innerHTML))
        jh++;
      }
        
      console.log(this.hg);
      if(this.hg == 0 && jh == 0)
      alert('check mate');
    }
      
    

  }

  backbutton =()=>{
    for(let f=0;f<=63;f++){
      document.getElementsByClassName('box')[f].innerHTML = document.getElementsByClassName('box1')[f].innerHTML;
    }
    
    if(this.turn == 'black' && this.index == 0)
    {
      this.turn= 'white';
    }
    else if( this.turn == 'white' &&this.index == 0){
      this.turn= 'black';;
    }
    this.ste= true;
   }

  render() {
    return (
      <div id="chessgame">
        <h1 style={{ textAlign: "center",margin: "20px" }}>CHESS</h1>
        <div class="chessboard" id="chess1">
          <span class="white box" id="a1" onClick={this.clk}>&#9820;</span>
          <span class="black box" id="a2" onClick={this.clk}>&#9822;</span>
          <span class="white box" id="a3" onClick={this.clk}>&#9821;</span>
          <span class="black box" id="a4" onClick={this.clk}>&#9819;</span>
          <span class="white box" id="a5" onClick={this.clk}>&#9818;</span>
          <span class="black box" id="a6" onClick={this.clk}>&#9821;</span>
          <span class="white box" id="a7" onClick={this.clk}>&#9822;</span>
          <span class="black box" id="a8" onClick={this.clk}>&#9820;</span>

          <span class="black box" id="b1" onClick={this.clk}>&#9823;</span>
          <span class="white box" id="b2" onClick={this.clk}>&#9823;</span>
          <span class="black box" id="b3" onClick={this.clk}>&#9823;</span>
          <span class="white box" id="b4" onClick={this.clk}>&#9823;</span>
          <span class="black box" id="b5" onClick={this.clk}>&#9823;</span>
          <span class="white box" id="b6" onClick={this.clk}>&#9823;</span>
          <span class="black box" id="b7" onClick={this.clk}>&#9823;</span>
          <span class="white box" id="b8" onClick={this.clk}>&#9823;</span>

          <span class="white box" id="c1" onClick={this.clk}></span>
          <span class="black box" id="c2" onClick={this.clk}></span>
          <span class="white box" id="c3" onClick={this.clk}></span>
          <span class="black box" id="c4" onClick={this.clk}></span>
          <span class="white box" id="c5" onClick={this.clk}></span>
          <span class="black box" id="c6" onClick={this.clk}></span>
          <span class="white box" id="c7" onClick={this.clk}></span>
          <span class="black box" id="c8" onClick={this.clk}></span>

          <span class="black box" id="d1" onClick={this.clk}></span>
          <span class="white box" id="d2" onClick={this.clk}></span>
          <span class="black box" id="d3" onClick={this.clk}></span>
          <span class="white box" id="d4" onClick={this.clk}></span>
          <span class="black box" id="d5" onClick={this.clk}></span>
          <span class="white box" id="d6" onClick={this.clk}></span>
          <span class="black box" id="d7" onClick={this.clk}></span>
          <span class="white box" id="d8" onClick={this.clk}></span>

          <span class="white box" id="e1" onClick={this.clk}></span>
          <span class="black box" id="e2" onClick={this.clk}></span>
          <span class="white box" id="e3" onClick={this.clk}></span>
          <span class="black box" id="e4" onClick={this.clk}></span>
          <span class="white box" id="e5" onClick={this.clk}></span>
          <span class="black box" id="e6" onClick={this.clk}></span>
          <span class="white box" id="e7" onClick={this.clk}></span>
          <span class="black box" id="e8" onClick={this.clk}></span>

          <span class="black box" id="f1" onClick={this.clk}></span>
          <span class="white box" id="f2" onClick={this.clk}></span>
          <span class="black box" id="f3" onClick={this.clk}></span>
          <span class="white box" id="f4" onClick={this.clk}></span>
          <span class="black box" id="f5" onClick={this.clk}></span>
          <span class="white box" id="f6" onClick={this.clk}></span>
          <span class="black box" id="f7" onClick={this.clk}></span>
          <span class="white box" id="f8" onClick={this.clk}></span>

          <span class="white box" id="g1" onClick={this.clk}>&#9817;</span>
          <span class="black box" id="g2" onClick={this.clk}>&#9817;</span>
          <span class="white box" id="g3" onClick={this.clk}>&#9817;</span>
          <span class="black box" id="g4" onClick={this.clk}>&#9817;</span>
          <span class="white box" id="g5" onClick={this.clk}>&#9817;</span>
          <span class="black box" id="g6" onClick={this.clk}>&#9817;</span>
          <span class="white box" id="g7" onClick={this.clk}>&#9817;</span>
          <span class="black box" id="g8" onClick={this.clk}>&#9817;</span>

          <span class="black box" id="h1" onClick={this.clk}>&#9814;</span>
          <span class="white box" id="h2" onClick={this.clk}>&#9816;</span>
          <span class="black box" id="h3" onClick={this.clk}>&#9815;</span>
          <span class="white box" id="h4" onClick={this.clk}>&#9812;</span>
          <span class="black box" id="h5" onClick={this.clk}>&#9813;</span>
          <span class="white box" id="h6" onClick={this.clk}>&#9815;</span>
          <span class="black box" id="h7" onClick={this.clk}>&#9816;</span>
          <span class="white box" id="h8" onClick={this.clk}>&#9814;</span>
        </div>

        <div id="chess2">
          <div class="white box1" id="a1" onClick={this.clk}>&#9820;</div>
          <div class="black box1" id="a2" onClick={this.clk}>&#9822;</div>
          <div class="white box1" id="a3" onClick={this.clk}>&#9821;</div>
          <div class="black box1" id="a4" onClick={this.clk}>&#9819;</div>
          <div class="white box1" id="a5" onClick={this.clk}>&#9818;</div>
          <div class="black box1" id="a6" onClick={this.clk}>&#9821;</div>
          <div class="white box1" id="a7" onClick={this.clk}>&#9822;</div>
          <div class="black box1" id="a8" onClick={this.clk}>&#9820;</div>

          <div class="black box1" id="b1" onClick={this.clk}>&#9823;</div>
          <div class="white box1" id="b2" onClick={this.clk}>&#9823;</div>
          <div class="black box1" id="b3" onClick={this.clk}>&#9823;</div>
          <div class="white box1" id="b4" onClick={this.clk}>&#9823;</div>
          <div class="black box1" id="b5" onClick={this.clk}>&#9823;</div>
          <div class="white box1" id="b6" onClick={this.clk}>&#9823;</div>
          <div class="black box1" id="b7" onClick={this.clk}>&#9823;</div>
          <div class="white box1" id="b8" onClick={this.clk}>&#9823;</div>

          <div class="white box1" id="c1" onClick={this.clk}></div>
          <div class="black box1" id="c2" onClick={this.clk}></div>
          <div class="white box1" id="c3" onClick={this.clk}></div>
          <div class="black box1" id="c4" onClick={this.clk}></div>
          <div class="white box1" id="c5" onClick={this.clk}></div>
          <div class="black box1" id="c6" onClick={this.clk}></div>
          <div class="white box1" id="c7" onClick={this.clk}></div>
          <div class="black box1" id="c8" onClick={this.clk}></div>

          <div class="black box1" id="d1" onClick={this.clk}></div>
          <div class="white box1" id="d2" onClick={this.clk}></div>
          <div class="black box1" id="d3" onClick={this.clk}></div>
          <div class="white box1" id="d4" onClick={this.clk}></div>
          <div class="black box1" id="d5" onClick={this.clk}></div>
          <div class="white box1" id="d6" onClick={this.clk}></div>
          <div class="black box1" id="d7" onClick={this.clk}></div>
          <div class="white box1" id="d8" onClick={this.clk}></div>

          <div class="white box1" id="e1" onClick={this.clk}></div>
          <div class="black box1" id="e2" onClick={this.clk}></div>
          <div class="white box1" id="e3" onClick={this.clk}></div>
          <div class="black box1" id="e4" onClick={this.clk}></div>
          <div class="white box1" id="e5" onClick={this.clk}></div>
          <div class="black box1" id="e6" onClick={this.clk}></div>
          <div class="white box1" id="e7" onClick={this.clk}></div>
          <div class="black box1" id="e8" onClick={this.clk}></div>

          <div class="black box1" id="f1" onClick={this.clk}></div>
          <div class="white box1" id="f2" onClick={this.clk}></div>
          <div class="black box1" id="f3" onClick={this.clk}></div>
          <div class="white box1" id="f4" onClick={this.clk}></div>
          <div class="black box1" id="f5" onClick={this.clk}></div>
          <div class="white box1" id="f6" onClick={this.clk}></div>
          <div class="black box1" id="f7" onClick={this.clk}></div>
          <div class="white box1" id="f8" onClick={this.clk}></div>

          <div class="white box1" id="g1" onClick={this.clk}>&#9817;</div>
          <div class="black box1" id="g2" onClick={this.clk}>&#9817;</div>
          <div class="white box1" id="g3" onClick={this.clk}>&#9817;</div>
          <div class="black box1" id="g4" onClick={this.clk}>&#9817;</div>
          <div class="white box1" id="g5" onClick={this.clk}>&#9817;</div>
          <div class="black box1" id="g6" onClick={this.clk}>&#9817;</div>
          <div class="white box1" id="g7" onClick={this.clk}>&#9817;</div>
          <div class="black box1" id="g8" onClick={this.clk}>&#9817;</div>

          <div class="black box1" id="h1" onClick={this.clk}>&#9814;</div>
          <div class="white box1" id="h2" onClick={this.clk}>&#9816;</div>
          <div class="black box1" id="h3" onClick={this.clk}>&#9815;</div>
          <div class="white box1" id="h4" onClick={this.clk}>&#9812;</div>
          <div class="black box1" id="h5" onClick={this.clk}>&#9813;</div>
          <div class="white box1" id="h6" onClick={this.clk}>&#9815;</div>
          <div class="black box1" id="h7" onClick={this.clk}>&#9816;</div>
          <div class="white box1" id="h8" onClick={this.clk}>&#9814;</div>
        </div>
      </div>
    );
  }
}
export default layout;