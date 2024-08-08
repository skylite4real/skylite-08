document.querySelector('.add-icon').addEventListener('click', function() {
    document.getElementById('uploadSection').style.display = 'block';
    document.body.classList.add('uploading'); /* Prevent background scroll */
});

document.querySelector('.back-icon').addEventListener('click', function() {
    // Hide upload section and reset content
    document.getElementById('uploadSection').style.display = 'none';
    document.body.classList.remove('uploading'); /* Re-enable background scroll */
    resetUploadSection();
});

// Function to reset the upload section to its initial state
function resetUploadSection() {
    // Hide all tab content, steps, and box
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });
    document.querySelectorAll('.steps').forEach(function(steps) {
        steps.style.display = 'none';
    });
    document.getElementById('boxContent').style.display = 'none';
    document.getElementById('previewBox').style.display = 'none'; // Hide the preview box initially

    // Remove active classes from tabs and steps
    document.querySelectorAll('.upload-tabs .tab').forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.steps .step').forEach(function(step) {
        step.classList.remove('active');
    });

    // Show the initial message
    document.getElementById('initialMessage').style.display = 'block';
}

// Toggle content based on the tab clicked
function showTabContent(tabName) {
    // Hide the initial message
    document.getElementById('initialMessage').style.display = 'none';

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the clicked tab content
    document.getElementById(tabName + 'Content').style.display = 'block';

    // Show the steps for the selected tab
    document.querySelectorAll('.steps').forEach(function(steps) {
        steps.style.display = 'none';
    });
    document.getElementById(tabName + 'Content').querySelector('.steps').style.display = 'flex';

    // Set the initial default step for the selected tab
    if (tabName === 'video') {
        showSectionContent('chooseMedia');
    } else if (tabName === 'short') {
        showSectionContent('chooseShort');
    } else if (tabName === 'post') {
        showSectionContent('choosePosts');
    }

    // Show the box content
    document.getElementById('boxContent').style.display = 'block';

    // Show the preview box for video, short, and post tabs
    if (tabName === 'video' || tabName === 'short' || tabName === 'post') {
        document.getElementById('previewBox').style.display = 'block';
    } else {
        document.getElementById('previewBox').style.display = 'none';
    }

    // Remove active class from all tabs
    document.querySelectorAll('.upload-tabs .tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Add active class to the clicked tab
    document.querySelector(`.upload-tabs .tab[onclick="showTabContent('${tabName}')"]`).classList.add('active');
}

// Toggle content based on the section clicked
function showSectionContent(sectionName) {
    // Hide all step content inside the box
    document.querySelectorAll('.box-content > div').forEach(function(content) {
        content.style.display = 'none';
    });

    // Display content based on the selected section
    const sectionContentId = sectionName + 'Content';
    const sectionContent = document.getElementById(sectionContentId);
    if (sectionContent) {
        sectionContent.style.display = 'block';
    }

    // Highlight the active step
    document.querySelectorAll('.steps .step').forEach(function(step) {
        step.classList.remove('active');
    });
    document.querySelector(`.steps .step[onclick="showSectionContent('${sectionName}')"]`).classList.add('active');
}

// Call resetUploadSection initially to ensure the initial view is displayed
resetUploadSection();
