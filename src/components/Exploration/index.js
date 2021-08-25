import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Exploration() {
  return (
    <div className="Exploration">
      <section className="Exploration__main">
        <div className="Exploration__main__informations animate__animated animate__fadeIn">
          <div className="Exploration__main__informations__general">
            <div className="Exploration__main__informations__general__left">
              <div>
                <h2>Exploration trop chouette!</h2>
                <p>Organisée par Baptiste de la Rochère</p>
                <div className="Exploration__main__informations__general__left__title__stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
              <img
                src="https://img.20mn.fr/r4hnPca8RRWkXhjG7q86mA/768x492_galaxie.jpg"
                alt=""
                className="Exploration__main__informations__general__illustration"
              />
            </div>
            <div className="Exploration__main__informations__general__right">
              <h2>Informations</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                enim assumenda dolorum suscipit voluptatibus, consectetur minima
                nobis itaque ab laboriosam nihil asperiores repudiandae
                doloremque eius optio soluta, pariatur incidunt obcaecati?
                Dolorem sint recusandae corrupti harum repellendus, vitae
                molestias temporibus sed. Porro atque a maiores eos, quod,
                nesciunt unde libero pariatur adipisci sint consectetur eligendi
                veniam rem, rerum quas asperiores. Rerum! Porro aliquid officiis
                eius maiores delectus aut, quas quos veniam ad placeat ea vero
                ipsa similique, tempore obcaecati nobis dolorum totam debitis
                modi et voluptatem culpa quasi. Perspiciatis, maxime repellat.
                Error laborum rem quae, cumque quis possimus odit veritatis
                ipsam doloremque autem neque? Corporis maxime cum perferendis,
                cumque fugiat dolores! Quisquam omnis repellat unde animi nulla
                voluptas ipsum consequuntur dicta.
              </p>
              <button type="button" className="button --secondary">
                Participer
              </button>
            </div>
          </div>
        </div>
        <div className="Exploration__main__participants">
          <h3>Participants (max. 10)</h3>
          <ul className="Exploration__main__participants__list">
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
            <li className="Exploration__main__participants__list__item">
              <span className="icon">
                <img
                  src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                  alt=""
                />
              </span>
              <span>DavDav (Théo BIET)</span>
              <span>
                <button type="button" className="button --secondary">
                  i
                </button>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="Exploration__overview">
        <div className="Exploration__overview__left">
          <div className="Exploration__overview__left__weather">
            <div className="Exploration__overview__left__weather__icon">
              <img
                src="http://openweathermap.org/img/wn/10d@4x.png"
                alt="Current weather icon"
              />
            </div>
            <div className="Exploration__overview__left__weather__temp">
              19°C
            </div>
          </div>
          <div className="Exploration__overview__left__comments">
            <h3>Commentaires</h3>
            <ul className="Exploration__overview__left__comments__list">
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
              <li className="Exploration__overview__left__comments__list__item">
                <div className="Exploration__overview__left__comments__list__item__author">
                  <span className="avatar">
                    <img
                      src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
                      alt=""
                    />
                  </span>
                  <span>DavDav (Théo BIET)</span>
                </div>
                <span className="Exploration__overview__left__comments__list__item__text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa, soluta ratione. Cupiditate iure excepturi maxime
                    consequatur accusamus reprehenderit officia tempora eos,
                    iste aut eum? Exercitationem consequatur animi explicabo
                    minus dolor!
                  </p>
                </span>
              </li>
            </ul>
            <div className="Exploration__overview__left__comments__form">
              <div className="Exploration__overview__left__comments__form__input">
                <input
                  type="text"
                  placeholder="Commenter"
                  className="Exploration__overview__left__comments__form__input__input input"
                />
              </div>
              <div className="Exploration__overview__left__comments__form__button">
                <button
                  type="submit"
                  className="Exploration__overview__left__comments__form__button__button button --secondary"
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Exploration__overview__map">
          <MapContainer
            // Centering on the map of france
            center={[44.840291, 2.109375]}
            zoom={6}
            maxZoom={18}
            minZoom={3}
            className="Exploration__overview__map__elem"
          >
            {/* Add layer dark map */}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
              name="tiles"
            />
            {/* Add Markers events astro on the map */}
          </MapContainer>
        </div>
      </section>
      <section className="Exploration__author">
        <div className="Exploration__author__avatar" />
        <div className="Exploration__author__informations">
          <div className="Exploration__author__informations__name" />
        </div>
      </section>
    </div>
  );
}
