function loadModule(module) {
    let links = '';
    const dynamicLinks = document.getElementById('dynamicLinks');

    switch(module) {
      case 'module1':
        links = `
          <li class="nav-item"><a class="nav-link" href="../Module1/pioneers.html">Early Pioneers</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/early_analysis.html">Role of Early Analysis</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/careers.html">Careers</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/modern_data_collection.html">Modern Data Collection</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/big_data.html">Big Data</a></li>
          <li class="nav-item"><a class="nav-link" href="../Module1/technology_evolution.html">Technology Evolution</a></li>
        `;
        break;
      case 'module2':
        links = `
        <li class="nav-item"><a class="nav-link" href="graphs.html">Graph Guide</a></li>
        <li class="nav-item"><a class="nav-link" href="Understanding_Missing_Data_and_Zero_Values_in_Datasets.html">Missing Data and Zero Values</a></li>
        <li class="nav-item"><a class="nav-link" href="The_Scale_of_Data__From_Bytes_to_Zettabytes.html">Scale of Data</a></li>
        <li class="nav-item"><a class="nav-link" href="Dealing_with_Anomalies_in_Data.html">Data Anomalies</a></li>
        <li class="nav-item"><a class="nav-link" href="The_Importance_of_Data_Quality_in_Analytics.html">Data Analytics</a></li>
        <li class="nav-item"><a class="nav-link" href="The_Trade-off_Between_Data_Accuracy_and_Speed.html">Trade-Off</a></li>
        `;
        break;
      case 'module3':
        links = `
          <li class="nav-item"><a class="nav-link" href="#">Link 3.1</a></li>
        `;
        break;
      case 'module4':
        links = `
          <li class="nav-item"><a class="nav-link" href="#">Link 4.1</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.2</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.3</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Link 4.4</a></li>
        `;
        break;
    }

    dynamicLinks.innerHTML = links;
  }
  document.addEventListener("DOMContentLoaded", function() {
      loadModule('module2');
  });

  document.getElementById('dataSizeSlider').addEventListener('input', function(e) {
    const units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB'];
    const selectedValue = e.target.value - 1; // because arrays are 0-indexed
    const selectedUnit = units[selectedValue];
    document.getElementById('sliderValue').innerText = `Selected Size: ${selectedUnit}`;

    let exampleText = "";
    switch (selectedUnit) {
        case 'Byte':
            exampleText = "A single character or a symbol.";
            break;
        case 'KB':
            exampleText = "About half a page of plain text.";
            break;
        case 'MB':
            exampleText = "A standard MP3 song or a high-resolution photo.";
            break;
        case 'GB':
            exampleText = "A high-definition movie or a video game.";
            break;
        case 'TB':
            exampleText = "The entire contents of a personal computer or hundreds of movies.";
            break;
        case 'PB':
            exampleText = "Storage needs of a large corporation.";
            break;
        case 'EB':
            exampleText = "Data generated by all humans in a year.";
            break;
        case 'ZB':
            exampleText = "Global internet traffic in a year.";
            break;
    }

    document.getElementById('exampleOutput').innerText = exampleText;
});