var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"Log in to Clinic24", 
body:" log clinic24 open browser enter url https:\/\/clinic.platform24.se . the recommended web browsers google chrome  or  microsoft edge . select appropriate login method: to log with siths card (see step 3 below). to log with mobile bankid (see step 4 below). to log with siths card: click  login with siths-card . select certificate siths e-id person hsa-id issuer click  ok . enter security code (pin) siths card click  ok . to log with mobile bankid: click  login with bank-id . enter personal number (yyyymmddnnnn) click  sign . open bankid application mobile device follow instructions there. choose care unit role, example testviken hälsocentral, nurse , drop-down list, preset, click  confirm . the first time log clinic24, window appear need select your  shift type . see user manual clinic24 read different shift types. select desired shift type drop-down list. let the  load balancer deactivated (the toggle button left gray background). click  confirm . your choice shift type saved clinic24 window appear logins. see user manual read how change necessary. clinic24 lacks support used citrix vpn. if connected internet vpn, example allow remotely access regular medical record system, need ensure log work separate web browser window outside current vpn session. please note communication data handled secure legally compliant manner. if problems logging clinic24, contact local administrator. " });

        store['en'][1]= {
        'title': "Log in to Clinic24",
        'href': 'UUID-47185b0d-f8d7-19fd-9b1a-addbe8c6c9df.html'
        
            , 'breadcrumbs': "Login \/ Log in to Clinic24"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        