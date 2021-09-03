var minEdad = 18;
        function _calcAge() {
            //** coger de la input form la fecha de nacimiento ("fecha_que_nacio")**//
            //** esto nos dará la cantidad de segundos desde el 1970 hasta la fecha de nacimiento del tío**// 
            var fecha_nacimiento = new Date(document.getElementById("fecha_que_nacio").value);

            //** esto nos dará la cantidad de segundos desde el 1970 hasta la fecha de hoy**// 
            var hoy = new Date();
            
            //** ahora se restan los segundos de hoy y de la fecha de nacimiento**//
            var restaTiempo = Math.abs(hoy.getTime() - fecha_nacimiento.getTime());

            //** formula simple de pasar los segundos a días**//
            var edad = Math.ceil(restaTiempo / (1000 * 3600 * 24)) / 365;

            //** enviar fecha ¿autorizado o no?**//
            return edad;
        }
        //** Compara la edad calculada con la mínima **//
        function _setAge() {

            var edad = _calcAge();
            //alert("mi edad es "x" + age);
            if (edad < minEdad) {
                alert("No puedes estar aqui. Tu solo bifrutas.");
            } else

                alert("Bienvenido alcoholico");
            window.open(main.htm, _self);

        }