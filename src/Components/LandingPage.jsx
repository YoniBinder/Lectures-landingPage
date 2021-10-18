import './LandingPage.css';


export default function LandingPage() {
    return (
        <div>
            <header id="home">
      <div className="container">
        <div className="hamburger-menu">
          <i className="fas fa-bars toggle"></i>
          <i className="fas fa-times toggle"></i>
        </div>

        <nav
          className="d-flex align-items-center justify-content-center justify-content-lg-between"
        >
          {/* <a className="navbar-brand" href="index.html">
            <img className="img-fluid" src="images/logo.png" alt="" />
          </a> */}

          {/* <!-- Navbar Links --> */}
          <ul className="nav-list text-center pt-3">
            
            <li className="nav-item">
              <a className="nav-link" href="#menu">סילבוס</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">הרצאת מבוא</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">מי אנחנו</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#home">עמוד הבית</a>
            </li>
            
            
            {/* <li className="nav-item">
              <a className="nav-link" href="#chefs">Our Team</a>
            </li> */}
          </ul>
        </nav>

        <div className="hero-text w-100 text-white px-2 px-sm-0">
          <h1 className="display-4">ברוכים הבאים למשקיעים בג'ינס</h1>
          <p className="lead mb-4">קורס למתחילים המעוניינים להשקיע במטבעות דיגיטליים ולהתפתח באופן אישי</p>
          <a className="btn px-5 mr-2" href="#">הרשמה להרצאת מבוא</a>
          {/* <a className="btn px-5 ml-2" href="#">לסילבוס</a> */}
        </div>
      </div>
    </header>

    <main>
      {/* <!-- About Section --> */}
      <section className="about" id="about">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-12 col-md-5" data-aos="fade-left">
              <img src="images/OhadPic.png" alt="" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-7 text-center text-md-right"
              data-aos="fade-right"
            >
              <div className="section-heading mb-3">
                <h4>נעים להכיר</h4>
                <h1 className="display-4"></h1>
              </div>

              <p>
              שמי אוהד קושמרו, מנכ"ל קבוצת "קושמרו תוצאות מדברות". מאז שאני זוכר את עצמי,
               הלב שלי היה דוהר מהתרגשות בכל פעם שנדרשתי לעמוד מול קהל,
                או להעביר מסרים ורעיונות לקבוצת אנשים.
            עבורי, להיכנס לחלל בו יושבים אנשים ומחכים למוצא פי, היה סיוט אמיתי.
              </p>
              <a className="btn mt-4 mb-5 mb-md-0" href="#">לאתר הרשמי</a>
            </div>
          </div>
          <div className="row align-items-lg-center">
          <div
              className="col-12 col-md-7 text-center text-md-right"
              data-aos="fade-left"
            >
              <div className="section-heading mb-3">
                <h4>התמדה זה שם המשחק</h4>
                <h1 className="display-4"></h1>
              </div>

              <p >
              שמי יוני בינדר, קרוב לשנתיים משקיע בקריפטו ובשוק ההון. בעל תואר ראשון בהנדסת מכונות,
              תואר שני במנהל עסקים, והיום אני מתכנת.
                 מאמין גדול בהתפתחות אישית ובהשכלה פיננסית, כי אחרי הכל
                 ההבדל בין עשירים לעניים הוא רק בראש. 
              </p>
              {/* <a className="btn mt-4 mb-5 mb-md-0" href="#">לאתר הרשמי</a> */}
            </div>
            <div className="col-12 col-md-5" data-aos="fade-right">
              <img src="images/Yoni_Logo.png" alt="" className="img-fluid" />
            </div>
           
          </div>
        </div>
      </section>

      {/* <!-- Menu Section --> */}
      <section className="menu" id="menu">
        <div className="container">
          <div className="row text-center text-white">
            {/* <!-- ----------- --> */}
            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-up">
              <div className="shop-info">
                <i className="far fa-clock mb-3"></i>
                <h1 className="mb-4">זמן הרצאת מבוא</h1>
                <p>20/11/2021</p>
                <p>יום חמישי בשעה 18:00</p>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-down">
              <div className="shop-info">
                <i className="fas fa-map-marker-alt mb-3"></i>
                <h1 className="mb-4">מיקום</h1>
                <address>
                  היכל התרבות, תל אביב
                </address>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4 mb-md-0" data-aos="fade-right">
              <div className="shop-info">
                <i className="fas fa-mobile-alt mb-3"></i>
                <h1 className="mb-4">דברו איתנו</h1>
                <p>טלפון: 054-3102729</p>
                <p>מייל: binderyoni@gmail.com</p>
              </div>
            </div>
          </div>
          {/* <!-- ------------- --> */}

          <hr className="mt-5" />
        </div>

        <div className="container-fluid p-0">
          <div className="section-heading my-5 text-center">
            <h4 className="text-white">מה נלמד בקורס?</h4>
            <h1 className="display-4">סילבוס</h1>
          </div>

          {/* <!-- Row #1 --> */}
          <div className="row no-gutters">
            {/* <!-- Column Set 1 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1">
              <img src="images/sylabus-9.jpg" alt="" className="img-fluid img-prop" />
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2 point-left"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center"> מושגים בסיסיים ומתקדמים</h1>
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>

            {/* <!-- Column Set 2 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-4 order-xl-3">
              <img src="images/sylabus-5.jpg" alt="" className="img-fluid" />
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4 point-left"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center">סוגי מטבעות</h1>
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>

            {/* <!-- Column Set 3 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5">
              <img src="images/sylabus-13.jpg" alt="" className="img-fluid img-prop" />
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6 point-left"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center">פלטפורמות מסחר</h1>
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>
          </div>

          {/* <!-- Row #2 --> */}
          <div className="row no-gutters">
            {/* <!-- Column Set 4 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2">
              <img src="images/sylabus-1.png" alt="" className="img-fluid img-prop"/>
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1 point-right"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center">כלי מסחר בסיסיים</h1>
                
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>
{/* 
            <!-- Column Set 5 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4">
              <img src="images/sylabus-10.jpg" alt="" className="img-fluid img-prop" />
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-3 point-right"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center">פלטפורמות DeFi</h1>
                
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>

            {/* <!-- Column Set 6 --> */}
            <div className="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6">
              <img src="images/sylabus-8.jpg" alt="" className="img-fluid img-prop" />
            </div>

            <div
              className="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5 point-right"
            >
              <div className="menu-item-desc">
                {/* <h6>10$</h6> */}
                <h1 className="text-center">בניית תיק השקעות</h1>
                {/* <p>This cake is amazing. I recommend it to everyone</p> */}
                {/* <a href="" className="btn mt-3 d-none d-xl-block">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="chef" id="chef">
        <div className="container">
          <div className="section-heading my-5 text-center">
            <h4>Meet</h4>
            <h1 className="display-4">Our Chefs</h1>
          </div>

          <div className="row text-center">
            <div className="col-12 col-md-4" data-aos="fade-right">
              <img className="img-fluid" src="images/chef-1.png" alt="" />
              <div className="card-body">
                <h1>Olivia Logan</h1>
                <h6>Cupcake Specialist</h6>
                <p>Olivia is an awesome pastry chef</p>
              </div>
            </div>

            <div className="col-12 col-md-4" data-aos="fade-up">
              <img className="img-fluid" src="images/chef-2.png" alt="" />
              <div className="card-body">
                <h1>Jessica Lewis</h1>
                <h6>Master Baker</h6>
                <p>Jessica is an awesome pastry chef</p>
              </div>
            </div>

            <div className="col-12 col-md-4" data-aos="fade-left">
              <img className="img-fluid" src="images/chef-3.png" alt="" />
              <div className="card-body">
                <h1>James Holt</h1>
                <h6>Cupcake Specialist</h6>
                <p>James is an awesome pastry chef</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <footer className="text-center py-2">
      <a className="btn px-5 mr-2" href="#">הרשמה להרצאת מבוא</a>
      <br/><br/><br/>
        &copy; משקיעים בג'ינס 2021
      </footer>
    </main>
        </div>
    )
}
