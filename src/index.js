import moment from "moment";
import EasySoap from "easysoap";

const params = {
  host: "https://espheregt.com/Externos/svc_PosicionGruasMT.svc",
  path: "",
  wsdl: "",
  headers: [
    {
      Action: "http://tempuri.org/Isvc_PosicionGruasMT/ObtenerToken"
    }
  ]
};

var soapClient = EasySoap(params);
var d = new Date();
var key = d.getUTCHours() * d.getUTCDate() + 22012027;
console.log(key);

soapClient
  .call({
    method: "ObtenerToken",
    attributes: {
      xmlns: "http://tempuri.org/"
    },
    params: {
      Llave: key,
      IdCliente: 22012027
    }
  })
  .then((callResponse) => {
    console.log(callResponse.data);
    console.log(callResponse.body);
    console.log(callResponse.header);
  })
  .catch((e) => {
    console.error(e);
  });
