import React from 'react'

const HomeBody = () => {
    return (
      <div>
        <div className="hero">
          <div className="text_hero">
            NUTRIENDO
            <br />
            HÁBITOS
          </div>
        </div>
        <div className="section_white">
          <div className="right_div">
            <div className="right_big">Lorem Ipsum</div>
            <div className="right_medium">Lorem Ipsum</div>
            <div className="right_small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              cumque libero, quae impedit, saepe maiores quam culpa sed commodi
              deleniti numquam repudiandae tenetur soluta. Facilis aperiam omnis
              magni vero quisquam.
            </div>
          </div>
          <div className="left_div">
            <img src="/images/happy-person.png" alt="" />
          </div>
        </div>
        <div className="healthy_bk">
                <div className="diabetes_fact">
                    {/* Random fact from the db */}
            <div>
                        En El Salvador se estima que el 10% de la población adulta padecen
                        diabetes tipo 2, lo cual, según el reciente censo de población
                        equivale aproximadamente a 400,000 personas.
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="section_white_about">
          <div className="about_right_div">
            <img src="/images/IMG_20200904_191228.jpg" alt="" />
          </div>
          <div className="about_left_div">
            <div className="about_left_big">Lorem Ipsum</div>
            <div className="about_left_medium">Lorem Ipsum</div>
            <div className="about_left_small">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              cumque libero, quae impedit, saepe maiores quam culpa sed commodi
              deleniti numquam repudiandae tenetur soluta. Facilis aperiam omnis
              magni vero quisquam.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              dolore neque reprehenderit dolores numquam labore, dolor sint
              eveniet earum, provident iusto ad eligendi ducimus, nostrum
              impedit natus molestiae deleniti illo.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              molestias placeat! Similique tempore voluptas reprehenderit
              voluptatum quibusdam minima corrupti voluptatem unde eum,
              explicabo est ducimus, sint nulla? Qui, corporis esse?
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomeBody
