import React, {Component} from 'react';

const Auth = ()=>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Uye Ol
</a>
<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    <form>
      <div class="form-group">
        <input class="form-control" name="name" id="name" type="text" placeholder="Isim - Soyisim"/>
      </div>
      <div class="form-group">
        <input class="form-control" name="phone_no" id="phone_no" type="text" placeholder="Cep no"/>
      </div>
      <div class="form-group">
        <input class="form-control" name="department" id="department" type="text" placeholder="Bolum"/>
      </div>
      <div class="form-group">
        <input class="form-control" name="surname" id="surname" type="text" placeholder="Sinif"/>
      </div>
      <div class="form-group">
        <input class="form-control" name="email" id="email" type="email" placeholder="Email"/>
      </div>
        {/* Admin hesaplari icin: */}
        {/* <div class="form-group">
          <label class="">Password</label>
          <input class="form-control" name="password" id="password" type="password"/>
          <br class=""/>
        </div> */}
        <button type="submit" id="btnLogin" class="btn btn-success btn-sm">Giris</button>
    </form>
</div>
</li>
export default Auth;

        