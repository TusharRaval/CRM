import './App.css';

function h1() {
  return (
    <><nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand a" href="#n">bansi Crm</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
            <a class="nav-link" href="#f">Features</a>
            <a class="nav-link" href="#p">Pricing</a>
            <a className="nav-link disabled" href="#d" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="container">
        <div class="row">
          <div className="col-6 col-sm-6"> <img src="src/a.png" class="img-thumbnail" alt="..."></img> </div> 
          <div className="col-6 col-sm-6 "> <p>this is first crm to use</p></div>
        </div>
      </div></>
  );
}

export default h1;
