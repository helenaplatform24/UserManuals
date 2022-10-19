var store = {};store['en'] = {};


        $(document).ready(function () {
        
            
            index  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"Preparation", 
body:" preparation to able complete steps guide, logged clinic24 appointment view ongoing digital appointment. for information how log in, see log in to . for information how receive execute appoinment, see reference. " });
this.add({id:2, 
title:"Lämna över ett pågående besök", 
body:" lämna över ett pågående besök tryck på nedåtpilen (v) till höger om avsluta besök och välj lämna över besök menyn som visas. välj vårdenhet och roll att lämna över till, prioritet samt skriv ett valfritt meddelande kring överlämningen. om du vill lämna över besöket till en specifik kollega, väljer hen vårdpersonal detta steg. tryck på slutför . om du önskar avbryta överlämningen innan den har accepterats av en mottagare, klicka på avbryt överlämning ovanför chattrutan. när överlämningen har accepterats av en mottagare får du notifikation clinic24 och... ...patienten får ett automatiskt meddelande chatten om att en överlämning har ägt rum. när besöket lämnas över aktiveras automatiskt en vårdgivarchatt med mottagaren. klicka på pratbubblan ovanför chattrutan för att öppna denna chatt ett separat chattfönster besöksvyn. här kan du och mottagaren vid behov kommunicera vidare kring överlämningen. chattmeddelandena vårdgivarchatten är inte synliga patienten. justera texten besöksanteckningen utifrån behov och lokala journalföringsrutiner. tryck på signera och kopiera . Öppna sedan en journalanteckning ditt ordinarie journalsystem och skriv din journal \/ klistra anteckningen från clinic24 enligt gällande journalföringsrutiner. du kan nu stänga besöksvyn genom att exempelvis gå till startsida för att ta emot nästa patient liggaren. fram till dess att överlämningen har accepterats av en mottagare är du fortfarande ansvarig för besöket och det synligt fliken mina aktuella din liggare. när överlämningen genomförts är du inte längre ansvarig för besöket, men automatiskt kvar det som en inbjuden gäst fram till dess att besöket avslutas. besöket ligger då synligt fliken besök som gäst din liggare. " });
this.add({id:3, 
title:"Ta emot en överlämning av ett pågående besök", 
body:" ta emot en överlämning av ett pågående besök ett notifiering om att en besöksöverlämning initierats till dig visas clinic24. det aktuella besöket blir synligt liggaren på startsida . texten synk Överlämning och en färgad pil kolumnen status indikerar att det rör sig om ett besök som önskas överlämnas. tryck på besöket för att komma besöksvyn. tryck på acceptera eller neka besöksvyn för att acceptera eller neka till överlämningen av besöket. tryck på pratbubblan ovanför chattrutan för att öppna vårdgivarchatten, om du önskar chatta med kollegan som initierade besöksöverlämningen till dig. när överlämningen är accepterad kan du skapa en ny, egen besöksanteckning genom att trycka på ny anteckning besöksvyn. i anteckningsfönstret, skriv din anteckning och tryck på slutför . vill du signera anteckning samtidigt som slutför den, klicka rutan signera anteckning ... ...annars, om du vill fortsätta att skriva på din anteckning besöket, kan signera den vid ett senare tillfälle genom besöksvyn klicka signera och kopiera . " });

        store['en'][1]= {
        'title': "Preparation",
        'href': 'UUID-6f5f6e28-6f3a-27df-3786-dc1494bd8acb.html'
        
            , 'breadcrumbs': "Appointment handover \/ Preparation"
                , 'snippet': ''
            
        };
        
        

        store['en'][2]= {
        'title': "Lämna över ett pågående besök",
        'href': 'UUID-7b99a32c-33f9-bc0b-60d0-363a5ef91915.html'
        
            , 'breadcrumbs': "Appointment handover \/ Lämna över ett pågående besök"
                , 'snippet': ''
            
        };
        
        

        store['en'][3]= {
        'title': "Ta emot en överlämning av ett pågående besök",
        'href': 'UUID-0524231a-d2f2-ed77-59a0-49f9ef9cb702.html'
        
            , 'breadcrumbs': "Appointment handover \/ Ta emot en överlämning av ett pågående besök"
                , 'snippet': ''
            
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        