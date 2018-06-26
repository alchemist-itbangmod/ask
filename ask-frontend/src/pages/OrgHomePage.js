import React from 'react'

const OrgHomePage = props => (
  <div className='container' style={{ paddingTop: 50, paddingBottom: 50, }}>
    <div className='row'>
      <div className='col-12 col-sm-3 col-md-12'>
        <h1
          className='text-center'
          style={{
            color: 'black',
          }}
        >
          #ASK
        </h1>
        <div
          className='card'
          style={{
            marginTop: 20,
            backgroundColor: 'rgba(255,255,255)',
            borderRadius: 10,
          }}
        >
          <div className='container pt-4'>
            <form>
              <div className='form-group'>
                <h1>Lorem Ipsum</h1>
                <div id='lipsum'>
                  <p />
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Quisque at ipsum eu nibh cursus sodales sit amet id mi.
                    </li>
                  </ul>
                  <p />
                  <p />
                  <ul>
                    <li>
                      Sed sit amet lorem nec ex cursus fringilla ac et lorem.
                    </li>
                    <li>Aenean eleifend quam scelerisque congue interdum.</li>
                    <li>
                      Integer vel erat sollicitudin, ornare ligula vel, cursus
                      metus.
                    </li>
                  </ul>
                  <p />
                  <p />
                  <ul>
                    <li>Nam ultrices diam at risus ullamcorper efficitur.</li>
                    <li>In aliquam metus quis nunc euismod tempor.</li>
                    <li>
                      Pellentesque vel orci vitae massa mollis euismod nec in
                      lacus.
                    </li>
                    <li>
                      Pellentesque quis arcu consectetur, auctor nulla
                      vestibulum, posuere ligula.
                    </li>
                    <li>
                      Curabitur vehicula turpis sed orci suscipit posuere.
                    </li>
                    <li>
                      Praesent vel felis fermentum, efficitur enim porta, tempus
                      dui.
                    </li>
                  </ul>
                  <p />
                  <p />
                  <ul>
                    <li>Pellentesque lobortis nunc nec condimentum laoreet.</li>
                    <li>
                      Sed a tortor non leo sodales sollicitudin eget sed lectus.
                    </li>
                    <li>Etiam id metus in libero viverra tincidunt.</li>
                  </ul>
                  <p />
                  <p />
                  <ul>
                    <li>
                      Integer vel quam congue, fermentum mauris in, sodales
                      nulla.
                    </li>
                    <li>
                      Integer et urna vestibulum, maximus dolor sit amet,
                      accumsan nibh.
                    </li>
                    <li>Vestibulum et dolor a turpis dapibus commodo.</li>
                    <li>Aenean semper augue laoreet nunc bibendum posuere.</li>
                  </ul>
                  <p />
                </div>
              </div>
              <div className='mb-5'>
                <button className='btn btn-primary btn-block .btn-primary:hover col-5  text-center d-block m-auto'>
                  ENTER ROOM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default OrgHomePage
