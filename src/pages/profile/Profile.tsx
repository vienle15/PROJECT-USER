import React from "react";

function Profile() {
  return (
    <>
      <main className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="https://cdn.pixabay.com/photo/2023/08/10/03/39/woman-8180638_640.jpg" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">Đinh Lê Lý Trần</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>
                <h4 className="price">
                  current point: <span>1500</span>
                </h4>
                <p className="vote">
                  <strong>Suspendisse quos?</strong> Suspendisse quos? Tempus
                  cras iure temporibus? Eu laudantium cubilia sem sem!
                  Repudiandae et! Massa senectus enim minim sociosqu delectus
                  posuere.
                </p>
                <strong>(87 visiter)</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
