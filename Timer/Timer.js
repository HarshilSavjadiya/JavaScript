 let a;
      temp = document.getElementById("display");
      a = parseInt(temp.innerHTML);
      c = a;
      let temp2;

      let m = "KEEP GOING";

      function start() {
          temp2 = setInterval(startCounter, 500);
      }

      function startCounter() {
          a--;
          if (a >= 1) {
              temp.innerHTML = a;
          } else {
              clearInterval(temp2);
              document.write(m);
          }
      }

      function stop() {
          clearInterval(temp2);
          console.log(a);
          temp.innerHTML = a;
      }

      function reset() {
          clearInterval(temp2);
          temp.innerHTML = c;
      }