function QuantesLletresTe(VCadena) 
{

	var NLletres = 0
	var i = 0
	
	for(var i=1; i<=len(VCadena); i++) 
	{
    		if((VCadena.substring(i, 1)) >= "a" & VCadena.substring(i, 1)) <= "z") | (VCadena.substring(i, 1)) >= "A" & VCadena.substring(i, 1)) <= "Z")  
		{
      			NLletres = NLletres++
     		}
  	}

	return NLletres
}

var Cadena

//demanar frase


//cridar funcio
alert(QuantesLletresTe(Cadena))