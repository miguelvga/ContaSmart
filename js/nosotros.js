var questions = document.getElementsByClassName('question');

        for (var i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', function () {
                var answer = this.nextElementSibling;
                var isActive = this.classList.contains('active');

                // Ocultar respuestas previas
                var activeQuestions = document.getElementsByClassName('question active');
                for (var j = 0; j < activeQuestions.length; j++) {
                    var prevAnswer = activeQuestions[j].nextElementSibling;
                    prevAnswer.style.display = 'none';
                    activeQuestions[j].classList.remove('active');
                }

                // Mostrar o ocultar respuesta actual
                if (!isActive) {
                    answer.style.display = 'block';
                    this.classList.add('active');
                } else {
                    answer.style.display = 'none';
                    this.classList.remove('active');
                }
            });
        }