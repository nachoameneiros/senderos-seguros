import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController , LoadingController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({selector: 'page-signup-agente', templateUrl: 'signup-agente.html'})
export class SignupAgente {
  resposeData : any;
  colegios : any;
  colegio : any;
    
    imageURI:any;
imageFileName:any;
    
  userData = {"nombre":"", "apellido":"","password":"","email":"","colegio":"","dni":""};
  constructor(public navCtrl : NavController, 
  public authService : AuthService,
   private toastCtrl:ToastController,      
  private transfer: FileTransfer,
  private camera: Camera,
  public loadingCtrl: LoadingController
      
      ) {
    this.authService.postData(this.userData, "getcolegios/").then((result) =>{
        this.colegios = result;    
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }
    
    getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
}
    
    uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}
    
    presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  signup() {
     if(this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email&& this.userData.colegio&& this.userData.dni){
      //Api connections
    this.authService.postData(this.userData, "signupagente/").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.resultQuery == "OK"){
      console.log(this.resposeData);
      this.presentToast("Registro Exitoso");
      this.gotowelcome();
    }
    else{
    this.presentToast("Email existente");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    this.presentToast("Ingresar informacion valida");
  }
  
  }
    
      gotowelcome(){
   this.navCtrl.popToRoot();
  }

 
}
