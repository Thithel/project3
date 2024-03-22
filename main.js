function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function toggleSections(sectionClass) {
    var sections = document.querySelectorAll('.' + sectionClass);
    sections.forEach(function(section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}