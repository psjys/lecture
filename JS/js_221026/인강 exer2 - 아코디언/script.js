let panelQuestion = document.querySelectorAll('.panel-question');
let btnCollapse = document.getElementById('btn-collapse');

for (var pq of panelQuestion) {
    pq.addEventListener('click', function() {
        hideAll();
        this.classList.add('active');
    });
}

function hideAll() {
    for(q of panelQuestion) {
        q.classList.remove ('active');
    }
}
btnCollapse.addEventListener('click', hideAll);

