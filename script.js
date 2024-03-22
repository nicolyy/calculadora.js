/* chamar os seletores*/
class Calculadora {


    constructor() {
      this.operacao = [];
      this.visor = window.document.getElementById("visorInfo");
      this.status = "desligado";
      
    }
    ligarCalculadora() {
      this.status = "ligado"
      this.operacao = []
      this.ligarVisor()
      
    }


    ligarVisor (){
      this.visor.innerText = "0"
      
      setInterval(()=>{
        this.visor.style.display = "none";
        setTimeout(()=>{
          this.visor.style.display = "flex"
        }, 100)
      }, 1000)
          
    }
      
    
    //pega o valor digitado e lê ele para a tela e chama a tela para exibir
    lerValores(valorDigitado) {
      if(this.status === "desligado"){
        console.error(this.status)
      }else {
      this.operacao.push(valorDigitado)
      }
      
        //aqui eu já chamo o "exibir tela" com os valores tratados.
      this.exibeValoresDigitados(this.operacao.join(""))
    
     
      }
    
    //Exibe valor na tela
    exibeValoresDigitados (valor) {
      
      if(String(valor).length < 9){
      this.visor.innerText = valor;
      } else {
        this.visor.innerText = String(valor).slice(0,8)+"...";
      }
      
      
    }
    
    //Calcula e joga na tela o resultado
    handleOperacoes(){       
      let result= eval(this.operacao.join(""));
      
      this.exibeValoresDigitados(result)
      this.operacao = [ result ]
    }
    
    apagaUltimoDigito(){
      this.operacao.pop() 
      this.exibeValoresDigitados(this.operacao.join(""))
    }
    
    //     Temporizar para desligar depois de alguns segundos
    
  }
  
  var calculadora = new Calculadora
  
  const listaDeNumeros = Array.from (document.getElementsByClassName('numeros'))
  
  listaDeNumeros.map((element) => {
    element.addEventListener('click', (event) =>{
      calculadora.lerValores(event.target.value)
    })
  })
  
  const listaOperadores = Array.from (document.getElementsByClassName('operadores'))
  
  listaOperadores.map((element) => {
    element.addEventListener('click', (event) =>{
      calculadora.lerValores(event.target.value)
    })
  })
  