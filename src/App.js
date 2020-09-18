
import React from 'react';
import Item from './comps/item';
import Rou from './Rou';



function App() {
  
  return (
    <div>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="object" id="object_one" />
            <div className="object" id="object_two" />
            <div className="object" id="object_three" />
            <div className="object" id="object_four" />
            <div className="object" id="object_five" />
            <div className="object" id="object_six" />
            <div className="object" id="object_seven" />
            <div className="object" id="object_eight" />
            <div className="object" id="object_big" />
          </div>
        </div>
      </div>
      {/*End Preloader */}
      {/* Navbar */}
      <nav className="navbar navbar-default bootsnav no-background navbar-fixed black">
        <div className="container">
          {/* Start Atribute Navigation */}
          <div className="attr-nav">
            <ul>
              <li className="side-menu"><a href="true"><i className="fa fa-bars" /></a></li>
            </ul>
          </div>
          {/* End Atribute Navigation */}
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <a className="navbar-brand" href="/"><img src="https://via.placeholder.com/160x50.png" className="logo" alt="" /></a>
          </div>
          {/* End Header Navigation */}
        </div>
        {/* Start Side Menu */}
        <div className="side">
          <a href="/" className="close-side"><i className="fa fa-times" /></a>
          <div className="widget">
            <h6 className="title">Menu</h6>
            <ul className="link">
              <li><a href="/">Row 1</a></li>
              <li><a href="/">Row 2</a></li>
              <li><a href="/">Row 3</a></li>
              <li><a href="/">Row 4</a></li>
              <li><a href="/">Liên Hệ</a></li>
            </ul>
          </div>
        </div>
        {/* End Side Menu */}
      </nav>
      {/* Header */}
      <header id="hello">
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="banner">
                <h3>-Bánh mì-</h3>
                <h1>TUNG LONE</h1>
                <div className="inner_banner">
                  <div className="banner_content">
                    <p style={{"color": "white", "fontSize": "15px"}}>Thơm ngon, bổ dưỡng, chất lượng cao, chắc chắn sẽ làm bạn hài lòng.</p>
                    <p>*Ăn không ngon làm chó.</p>
                  </div>
                  <div className="stamp">
                    <img src="images/stamp.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* Container end */}


      </header>{/* Header end */}
      {/* Block Content */}
      <section id="block">
        <div className="container">
          {/* First section */}
          <div className="row">
            <div className="col-sm-8">
              <div className="feature">
                <div className="shack_burger">
                  <br/><br/><br/><br/>
                  <h3>ABCDEFJ</h3><hr/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <p className="caption">Đặt ngay nào !!!</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="signature">
                <div className="shape">
                  <span className="flaticon flaticon-burger" />
                  <p>Thơm ngon</p>
                </div>
                <div className="signature_content">
                  <p>Sử dụng nguyên liệu tươi ngon, hương thơm quyến rũ như người yêu của bạn</p>
                </div>
              </div>
            </div>
          </div>{/* first section end */}
          {/* Second section */}
          <div className="row">
            <div className="col-md-6">
              <div className="classic">
                <a href="/" className="classic_btn">Khuyến Mại</a>
                <div className="overlay">
                  <p style={{"fontSize":"25px"}}><strong>Mua 3 Tặng 1</strong></p>
                  <p>BÁNH MỲ TRỨNG.</p>
                  <p className="overlay_content">Thích thì mua, không thích thì mua, nay bánh mỳ trứng đã có ưu đãi mua 3 tặng thêm 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Carousel */}
              <div id="small_carousel" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#small_carousel" data-slide-to={0} className="active" />
                  <li data-target="#small_carousel" data-slide-to={1} />
                  <li data-target="#small_carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-caption">
                  <h3>The Original Burger</h3>
                  <hr />
                  <ul className="list-unstyled nutrition">
                    <li><a href="true"><span className="flaticon flaticon-protein" /><p>Bổ sung protein, tăng cường sức khỏe</p></a></li>
                    <li><a href="true"><span className="flaticon flaticon-carbohydrate" /><p>Cung cấp lượng tinh bột cho cơ thể</p></a></li>
                    <li><a href="true"><span className="flaticon flaticon-calories" /><p>Nạp đủ năng lượng</p></a></li>
                  </ul>
                  <div className="info_btn_shadow">
                    <a href="true" className="info_btn">info &amp; nutrition</a>
                  </div>
                </div>
                {/* carousel inner */}
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src="images/sb1.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="images/sb1.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="images/sb1.jpg" alt="" />
                  </div>
                </div>{/* carousel inner end */}
              </div>{/* Carousel end*/}
            </div>
          </div>{/* second section end */}
          {/* Third section */}
          {/* Carousel */}
          <Item />
          {/* Carousel end*/}
          {/* Forth section */}
          <div className="row forth_sec">
            <div className="col-sm-4">
              <div className="menu">
                <div className="inner_content">
                  <span className="flaticon flaticon-burger" />
                  <h2>BÁNH</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="drinks">
                <div className="inner_content">
                  <span className="flaticon flaticon-drink" />
                  <h2>COLA</h2>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="sides">
                <div className="inner_content">
                  <span className="flaticon flaticon-food" />
                  <h2>KHOAI</h2>
                </div>
              </div>
            </div>
          </div>{/* forth section end */}
        </div>
      </section>{/* Block Content end*/}
      {/* Lock */}
      <section id="lock">
        <h2>NGON ĐẾN TẬN CÙNG</h2>
        <p>Tận hưởng hương vị tuyệt hảo của bánh mì.</p>
      </section>
      {/* Map */}
      <Rou />
      <div id="ourmaps"/>
      {/* Footer */}
      <footer>
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-4 col-xs-12 col-lg-offset-1 pull-right">
              <div className="subscribe">
                <h4>Subscribe</h4>
                <p>Theo dõi dường xuyên để nhận thêm nhiều ưu đãi.
                    ĐỪNG BỎ LỠ !!!.</p>
                
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-xs-12 col-lg-offset-1 pull-right">
              <div className="contact_us">
                <h4>Liên Hệ</h4>
                <a href="true">tungxm113@gmail.com</a>
                <address>
                  Thôn Chùa Mới<br />
                    Xã Kênh Giang, huyện Thủy Nguyên <br />
                    Thành Phố Hải Phòng <br />
                </address>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12 pull-right">
              <div className="basic_info">
                <a href="true"><img className="footer_logo" src="https://via.placeholder.com/160x50.png" alt="Burger" /></a>
                <ul className="list-inline social">
                  <li><a href="https://www.facebook.com/tlt69" target="_blank" rel="noopener noreferrer" className="fa fa-facebook" /> </li>
                  <li><a href="true" className="fa fa-twitter" /> </li>
                  <li><a href="true" className="fa fa-instagram" /> </li>
                </ul>
                <div className="footer-copyright">
                  <p className="wow fadeInRight" data-wow-duration="1s">
                    Lập Trình Viên
                      <i className="fa fa-heart" />
                      :
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tlt69">TUNGLONE</a> <br />
                      20120. All Rights Reserved
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* Container end */}

      </footer>
      {/* Footer end */}
      {/* scroll up*/}
      <div className="scrollup">
        <a href="/"><i className="fa fa-chevron-up" /></a>
      </div>
    </div>
  );
}

export default App;
