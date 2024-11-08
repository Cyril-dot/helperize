function showCategoryForm(category) {
    // Show the form and update the description based on the selected category
    document.getElementById("category-form").style.display = "block";
    document.getElementById("service-form").style.display = "block";
    
    const descriptionText = document.getElementById("description-text");
    
    switch(category) {
      case 'writing':
        descriptionText.innerHTML = "You chose Academic Writing. We can assist with essays, dissertations, reports, and more.";
        break;
      case 'project':
        descriptionText.innerHTML = "You chose Project Management. Let us help you organize and execute your projects.";
        break;
      case 'research':
        descriptionText.innerHTML = "You chose Research Assistance. We provide detailed, well-researched content for any subject.";
        break;
      case 'editing':
        descriptionText.innerHTML = "You chose Editing & Proofreading. We will perfect your content for accuracy and clarity.";
        break;
      case 'content':
        descriptionText.innerHTML = "You chose Content Creation. Let us help you create original and engaging content for your audience.";
        break;
      case 'consulting':
        descriptionText.innerHTML = "You chose Consulting Services. We provide expert guidance for your academic or professional needs.";
        break;
      case 'other':
        descriptionText.innerHTML = "You chose Other. Please provide us with more details in the form below.";
        break;
      default:
        descriptionText.innerHTML = "Please select a category above.";
    }
  }
  