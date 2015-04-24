	function checkPas () {
			if (document.getElementById("pas").value == "111") {
					$( "#conteinerPas" ).hide( "drop", { direction: "left" }, "slow"  );	
					$( "footer" ).show( "drop", { direction: "down" }, "slow"  );	
				}
			else {
					$( "form" ).effect( "shake", 500 );
					var obj=document.getElementById("pas");
					obj.value="Пароль не верный";
				}
			}

   
	function menuClose () {
			$( "#conteinerNews" ).hide( "drop", { direction: "left" }, "slow"  );
			$( "#conteinerFAQ" ).hide( "drop", { direction: "left" }, "slow"  );
			}
			
	function menu (id) {
				menuClose();
				
				$( '#'+id ).delay(500).show( "drop", { direction: "left" }, "slow"  );
			}