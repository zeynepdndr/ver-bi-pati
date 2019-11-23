import React, {Component} from 'react';
import CustomButton from './../Shared/customButton'
import './gallery.css';
import { ModalGallery } from '../Common/modalGallery';

const Gallery = ()=>
<div>
  <div className="centeredButton">
    <CustomButton label="Kampüs Hayvanlarımız"></CustomButton>
    <CustomButton label="Faaliyetlerimiz"></CustomButton>
  </div>
  <div className="container-fluid">
  <div className="buttonAlign">
      <ModalGallery></ModalGallery>
  </div>
</div>
  <div className="gallery container-fluid" id="gallery">
  <div className="justify-content-center"> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image1" src={require('./../Res/images/gallery/ares.jpg')} alt="Card image cap"/>
      <div className="contentGallery">
        <h3>Ares</h3>
        <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur.</p>
      </div>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image2"  src="https://instagram.fsaw1-6.fna.fbcdn.net/vp/c071f8c8e811d16474e9253f362fb656/5E3AC639/t51.2885-15/sh0.08/e35/s640x640/65392547_1341411532674645_5489147204550259862_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=109 640w,https://instagram.fsaw1-6.fna.fbcdn.net/vp/5abd6d2054febf3d5072f0e79ed6e23f/5E3E49FD/t51.2885-15/sh0.08/e35/s750x750/65392547_1341411532674645_5489147204550259862_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=109 750w,https://instagram.fsaw1-6.fna.fbcdn.net/vp/5c5c4f2092d8366b64ade1e13f3cbe28/5E20CEFD/t51.2885-15/e35/s1080x1080/65392547_1341411532674645_5489147204550259862_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=109 1080w" alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image3"  src="https://instagram.fsaw1-5.fna.fbcdn.net/vp/dc651bc0c999da235a7fdd9b93a681fa/5E26F2BD/t51.2885-15/sh0.08/e35/p640x640/65416073_146993043029012_5655934735042736070_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=108 640w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/94534c7c9612540671d2c09fe77a0297/5E2427BD/t51.2885-15/sh0.08/e35/p750x750/65416073_146993043029012_5655934735042736070_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=108 750w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/b3fac988f086abcd3aafa793a8a25f35/5E17E958/t51.2885-15/e35/p1080x1080/65416073_146993043029012_5655934735042736070_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=108 1080w" alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image4"  src="https://instagram.fsaw1-7.fna.fbcdn.net/vp/7faf787fbc9f0777598500224a600ab5/5E2EA399/t51.2885-15/sh0.08/e35/p640x640/64776906_441957139720603_283498287468401451_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=107 640w,https://instagram.fsaw1-7.fna.fbcdn.net/vp/79720c7c0f266adc9bebabc3fece35f9/5E191A66/t51.2885-15/sh0.08/e35/p750x750/64776906_441957139720603_283498287468401451_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=107 750w,https://instagram.fsaw1-7.fna.fbcdn.net/vp/3b58d7988ab20535e0c4ca390d249573/5E23DDAA/t51.2885-15/e35/p1080x1080/64776906_441957139720603_283498287468401451_n.jpg?_nc_ht=instagram.fsaw1-7.fna.fbcdn.net&_nc_cat=107 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image5"  src={require('./../Res/images/gallery/zeytin.jpg')} alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image6"  src="https://instagram.fsaw1-5.fna.fbcdn.net/vp/4334362c3507450ac7c12fca1ca94a11/5E1CB62A/t51.2885-15/e35/59755659_596468947498443_1651129519825687518_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 640w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/4334362c3507450ac7c12fca1ca94a11/5E1CB62A/t51.2885-15/e35/59755659_596468947498443_1651129519825687518_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 750w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/4334362c3507450ac7c12fca1ca94a11/5E1CB62A/t51.2885-15/e35/59755659_596468947498443_1651129519825687518_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image4"  src="https://instagram.fsaw1-6.fna.fbcdn.net/vp/2ce9a9e78ed40af2cdc91e004634f358/5E356990/t51.2885-15/sh0.08/e35/s640x640/54731883_127599964971220_8745896860842076390_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=104 640w,https://instagram.fsaw1-6.fna.fbcdn.net/vp/1a75f0f5fc4644728480d6eb7cfd40f2/5E210090/t51.2885-15/sh0.08/e35/s750x750/54731883_127599964971220_8745896860842076390_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=104 750w,https://instagram.fsaw1-6.fna.fbcdn.net/vp/b1bc76ba4e488033673b4573a18c0bdb/5E2C8075/t51.2885-15/e35/54731883_127599964971220_8745896860842076390_n.jpg?_nc_ht=instagram.fsaw1-6.fna.fbcdn.net&_nc_cat=104 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image5"  src="https://instagram.fsaw1-4.fna.fbcdn.net/vp/fc86f6a2043f7355e351ed298317a8e9/5E19A9DE/t51.2885-15/sh0.08/e35/p640x640/54511467_189175842059075_2854346225088283310_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 640w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/ce27d6da85e751ba0c9fe96a453e026b/5E2B2CDE/t51.2885-15/sh0.08/e35/p750x750/54511467_189175842059075_2854346225088283310_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 750w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/4e070ebcd4b740f6529161f1119fb4b1/5E18F328/t51.2885-15/e35/54511467_189175842059075_2854346225088283310_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 1080w" alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image6"  src="https://instagram.fsaw1-10.fna.fbcdn.net/vp/840e3fe2953ec818198aab12c5fdf4b1/5E2C80CE/t51.2885-15/sh0.08/e35/p640x640/50957426_2237878749786017_8258742780115476025_n.jpg?_nc_ht=instagram.fsaw1-10.fna.fbcdn.net&_nc_cat=105 640w,https://instagram.fsaw1-10.fna.fbcdn.net/vp/4229505a950bffa23714bdc7cce148af/5E2F1D0A/t51.2885-15/sh0.08/e35/p750x750/50957426_2237878749786017_8258742780115476025_n.jpg?_nc_ht=instagram.fsaw1-10.fna.fbcdn.net&_nc_cat=105 750w,https://instagram.fsaw1-10.fna.fbcdn.net/vp/5305302b3726b28a6c902fa09796a051/5E2DD0A4/t51.2885-15/e35/50957426_2237878749786017_8258742780115476025_n.jpg?_nc_ht=instagram.fsaw1-10.fna.fbcdn.net&_nc_cat=105 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image4"  src="https://instagram.fsaw1-5.fna.fbcdn.net/vp/c7d9c769127c2899361d91419a14decd/5E317BAD/t51.2885-15/sh0.08/e35/p640x640/46597163_2070448252993743_169779910593483446_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 640w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/0dd3d1de3d9cd3937b6241418570ab47/5E2694AD/t51.2885-15/sh0.08/e35/p750x750/46597163_2070448252993743_169779910593483446_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 750w,https://instagram.fsaw1-5.fna.fbcdn.net/vp/54ec774f2f0305f832bb717e3422ffa0/5E1B7A5B/t51.2885-15/e35/46597163_2070448252993743_169779910593483446_n.jpg?_nc_ht=instagram.fsaw1-5.fna.fbcdn.net&_nc_cat=103 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image5"  src="https://instagram.fsaw1-9.fna.fbcdn.net/vp/6a89f2e4dc5392b5595c7574a0e6e330/5E37E2D1/t51.2885-15/sh0.08/e35/s640x640/45567687_2202555909959878_6238274055858112825_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=110 640w,https://instagram.fsaw1-9.fna.fbcdn.net/vp/8f51a2c67838581afb3b422cd1169ef7/5E347F15/t51.2885-15/sh0.08/e35/s750x750/45567687_2202555909959878_6238274055858112825_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=110 750w,https://instagram.fsaw1-9.fna.fbcdn.net/vp/9f3abd2a40e77681eda7f3f390fb8ff6/5E276C6B/t51.2885-15/e35/45567687_2202555909959878_6238274055858112825_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=110 1080w" alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image6"  src="https://instagram.fsaw1-4.fna.fbcdn.net/vp/92d70e8bf073aefbd3803b772c461c3e/5E19FB95/t51.2885-15/e35/53123378_2276680262602439_5944751923609426324_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 640w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/92d70e8bf073aefbd3803b772c461c3e/5E19FB95/t51.2885-15/e35/53123378_2276680262602439_5944751923609426324_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 750w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/92d70e8bf073aefbd3803b772c461c3e/5E19FB95/t51.2885-15/e35/53123378_2276680262602439_5944751923609426324_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image4"  src="  https://instagram.fsaw1-4.fna.fbcdn.net/vp/77b22c6b96aa5deddff3d68f266cb2da/5E3AACD9/t51.2885-15/sh0.08/e35/s640x640/51978540_350579128874135_7925732837572356854_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 640w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/588a28060e1a11c129e5aaf0baee46f0/5E249AD9/t51.2885-15/sh0.08/e35/s750x750/51978540_350579128874135_7925732837572356854_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 750w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/d3c9c9fd69daafc82d373ccff1cc3c1f/5E35B33C/t51.2885-15/e35/51978540_350579128874135_7925732837572356854_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 1080w" alt="Card image cap"/>
    </div> 
    <div className="mb-3 pics animation all 2">
      <img className="img-fluid" id="image5"  src="https://instagram.fsaw1-4.fna.fbcdn.net/vp/00f314ad7840330aab986b75b2f92ae6/5E1E5264/t51.2885-15/sh0.08/e35/s640x640/50523485_593779101048071_9186344319328859243_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 640w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/7a0745400adb51860fdc9061694634f2/5E2DCF64/t51.2885-15/sh0.08/e35/s750x750/50523485_593779101048071_9186344319328859243_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 750w,https://instagram.fsaw1-4.fna.fbcdn.net/vp/26bb47feefca083432b682ec957cf47b/5E313D81/t51.2885-15/e35/50523485_593779101048071_9186344319328859243_n.jpg?_nc_ht=instagram.fsaw1-4.fna.fbcdn.net&_nc_cat=111 1080w" alt="Card image cap"/>
    </div>
    <div className="mb-3 pics animation all 1">
      <img className="img-fluid" id="image6"  src="https://instagram.fsaw1-9.fna.fbcdn.net/vp/9e7e4188681001836b93e39d9ee66935/5E17C619/t51.2885-15/sh0.08/e35/s640x640/28430164_422825298131065_475083366450855936_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=101 640w,https://instagram.fsaw1-9.fna.fbcdn.net/vp/acaaf30571edf987e28a0285e5d4785a/5E2849E6/t51.2885-15/sh0.08/e35/s750x750/28430164_422825298131065_475083366450855936_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=101 750w,https://instagram.fsaw1-9.fna.fbcdn.net/vp/337f2256c3af7df5a48a565f4780fbc3/5E33966A/t51.2885-15/e35/28430164_422825298131065_475083366450855936_n.jpg?_nc_ht=instagram.fsaw1-9.fna.fbcdn.net&_nc_cat=101 1080w" alt="Card image cap"/>
    </div> 
  </div>

</div>
</div>
export default Gallery;