import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="container">
            <div className="row pt-4 pb-4 g-3">
              <div className="col-md-3">
                <ul className="footer-1">
                  <li>
                    <a href="#">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="#">Bisnis Pembayaran</a>
                  </li>
                  <li>
                    <a href="#">Syarat dan Ketentuan</a>
                  </li>
                </ul>
              </div>
              <hr className="footer-line"></hr>
              <div className="col-md-3 footer-2">
                <p className="text-center">Ikuti social media Lucky Store untuk mendapatkan promo dan info menarik lainnya.</p>
              </div>
              <div className="col-md-3">
                <div className="j-center">
                  <ul className="p-ico">
                    <li>
                      <a href="https://web.facebook.com/kimilbonchu.kimil/" target="_blank">
                        <img src="https://store.ximpay.com/assets/images/facebook.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/lucz.code/" target="_blank">
                        <img src="https://store.ximpay.com/assets/images/instagram.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send/?phone=%2B6283806106982&text&type=phone_number&app_absent=0" target="_blank">
                        <img src="https://store.ximpay.com/assets/images/wa.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Luckyx404" target="_blank">
                        <img src="https://store.ximpay.com/assets/images/line.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF"></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-3">
                <ul>
                  <li>
                    <a href="mailto: kimilbonchu@gmail.com">
                      <img src="https://store.ximpay.com/assets/images/cs.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF"></img>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* // Term Condition */}
        <div className="footer">
          <div className="container">
            <div className="row ">
              <div className="col text-center footer-main">
                <p>All intellectual property belongs to their respective owners. All rights reserved.</p>
                <p>FAQ | Syarat dan Ketentuan | Kebijakan Privasi |</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// https://store.ximpay.com/assets/images/cs.png;jsessionid=ED53F51D32C5BF58F66514D62E2348CF
