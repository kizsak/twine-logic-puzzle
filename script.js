document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.logic-grid td');
    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('marked')) {
                cell.classList.remove('marked');
                cell.classList.add('blocked');
            } else if (cell.classList.contains('blocked')) {
                cell.classList.remove('blocked');
            } else {
                cell.classList.add('marked');
            }
        });
    });

    document.getElementById('check-solution').addEventListener('click', () => {
        alert("Checking solution... (You can add solution validation logic here)");
    });
});
