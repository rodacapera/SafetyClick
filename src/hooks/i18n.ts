import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const lang = i18n.language;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: lang,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        drawer: {
          home: 'Home',
          profile: 'Profile',
          users: 'Users',
          buttons: 'Buttons',
          preferences: 'Preferences',
          darkTheme: 'Dark theme',
          supportingEntities: 'Supporting entities',
          aliasName: 'Alias',
          notify: 'Notify',
          groupName: 'Group',
          support: 'Support',
          shareTitle: 'Hi, I need support!',
          shareMessage:
            'Hi, I want help with something happening in my application.',
          shareSubject: 'Technical support'
        },
        employeesView: {
          banner:
            'Below, you will find a list of the users registered in your shop or residence. You can delete or add them using the floating button!',
          employeeNotFound:
            "We haven't found any users registered to your shop or residence. We invite you to watch the following video to learn how to register one.",
          alertTitleErrorDeleteUser: 'Remove user',
          alertDescriptionErrorDeleteUser:
            'Are you sure you want to delete this user? If so, press the OK button.'
        },
        notifyView: {
          banner:
            'Below, you will find a list of the notifications registered in your shop or residence.',
          notifyNotFound:
            "We haven't found any notifications registered to your shop or residence.",
          notifySend: 'The notification was sent'
        },
        buttonsView: {
          button: 'Button',
          banner:
            'Below, you will find a list of the buttons registered in your shop or residence. You can remove or add them using the floating button!',
          buttonsNotFound:
            "We haven't found any buttons registered to your shop or residence. We invite you to watch the following video to learn how to create one.",
          alertTitleErrorDeleteButton: 'Remove button',
          alertDescriptionErrorDeleteButton:
            'Are you sure you want to delete this button? If so, press the OK button.',
          buttonFindTitle:
            'We have detected the following button. To add it to your list, click the button below.',
          buttonStatus: 'Status',
          buttonConnected: 'Connected',
          buttonUnconnected: 'Unconnected',
          buttonIp: 'IP',
          searching: 'Searching',
          noDetectedButton: 'Button not detected. Swipe down to search again.'
        },
        geolocationAlert: {
          errorGPSTitle: 'Access denied',
          errorGPSDescription: 'Please enable GPS services to continue.',
          errorLocationPermissionsAlert: 'Permission denied',
          descriptionErrorLocationPermissionsAlert:
            'You have denied the use of geolocation. To enable it, you will need to uninstall the application and install it again.'
        },
        profileView: {
          titleAlertRemoveUser: 'Remove user',
          descriptionAlertRemoveUser: 'Are you sure to remove your user?'
        },
        profileTitle:
          'Below, you will find your profile data registered in our system. If you wish, you can update them right here.',
        adminFormView: {
          names: 'Names',
          lastNames: 'Last Names',
          email: 'Email',
          address: 'Address',
          city: 'City',
          country: 'Country',
          state: 'State',
          aliasName: 'Alias',
          group: 'Group No',
          groupAlias: 'Group name',
          placeHolderAliasGroup: 'My community name',
          alertGroupFoundTitle: 'Group not found',
          alertGroupFoundDescription:
            'The group code does not exist in our system. Please try again or create a new group if required.',
          aliasPlaceHolder: 'Coffee shop/Unit 3 res 201',
          newGroup: 'NEW GROUP',
          existentGroup: 'EXISTENT GROUP'
        },
        registerView: {
          banner:
            'Remember to add your family group or group of employees to your account from the main menu in the option',
          titleCreateAccountAdmin: 'Create an account',
          titleCreateAccountUser: 'Join a registered account',
          errorUserRegisterTitle: 'Existing account',
          errorUserRegisterDescription:
            'The account already exists in our system. Please try another phone number.',
          errorRegisterTitle: 'Error during registration',
          errorRegisterDescription:
            'All fields are required, please check and try again.'
        },
        loginView: {
          title: 'Login with your cell phone number!',
          signIn: 'Sign in',
          scanButton: 'Scan and join',
          signUp: 'Sign up',
          errorPhone: 'The phone number is not valid or is empty',
          goBack: 'Back',
          errorUserNotExist: 'The user does not exist in our system.',
          errorEmail: 'The entered email is not valid'
        },
        loginSplashView: {
          welcome: 'Welcome to',
          description:
            'SafetyClick is a New a tool available to you. by pressing the SafetyClick button you send an instant message to your selected community with your register Geo-location. if you are in an emergency press the dial button to call 911.'
        },
        onboarding: {
          titleOne: 'Use our APP',
          titleTwo: 'With our messaging service',
          titleThree: 'We are your best option',
          titleFour: 'We need access to your location!',
          descriptionOne:
            'When you find yourself in a situation requiring support or aid.',
          descriptionTwo:
            'You can communicate your need to your community of friends.',
          descriptionThree:
            'For those moments when you need a helping hand in your community.',
          descriptionFour:
            'For the proper functioning of our application, we need access to your location to complete your profile data.',
          next: 'Next',
          skip: 'Skip'
        },
        otp: {
          title: 'OTP code verification',
          subTitle:
            'An OTP code has been sent to your cell phone. Enter it below.',
          error: 'The code is not valid. Please try again.',
          resend: 'Resend',
          alertErrorTitleOtp: 'Error OTP',
          alertErrorDescriptionOtp:
            'We have blocked all requests from this device due to unusual activity. Try again later.'
        },
        general: {
          phone: 'Phone',
          back: 'Back',
          clear: 'Clear',
          verify: 'Verify',
          ok: 'OK',
          cancel: 'Cancel',
          send: 'Send',
          continue: 'Continue',
          here: 'here.',
          scanning: 'Scanning',
          loading: 'Loading',
          continueBike: 'Continue as a vehicle',
          continueResidence: 'Continue as residence',
          vehicle: 'Vehicle',
          personalData: 'Your personal data',
          groupData: 'Your group data',
          copiedText: 'Text successfully copied',
          preferences: 'Preferences',
          removeAccount: 'If you want to remove your account please click',
          remove: 'Remove'
        },
        qrModal: {
          helperTitleQr:
            'Ask your co-worker or relative  to scan this code from their app to register for your shop or residence!',
          helperFooterQrFirst: "Learn how it's done, click"
        },
        buttonsModal: {
          formTitle: 'Add your network settings',
          formTitleFinish: 'The last step',
          descriptionLastStep:
            '1. Please click on the Continue button, If the button was not set, copy and paste this link into your browser and press Enter.\n2. Switch your current network to get internet.',
          formCaption: 'Please input your network password and press continue!',
          networkName: 'ISS',
          networkPass: 'Password',
          title: 'Select your network!',
          helperTitleQr:
            '1. Connect to power and turn on \n    your button.\n\n2. On your phone, connect to the\n     Wi-Fi network that starts with\n     shellybutton1.\n\n3. Go back to this screen and\n     select your Wi-Fi network from\n     the list below.\n\n4. Follow the next steps.',
          helperFooterQrFirst: "Learn how it's done, click",
          internetError: 'Internet error, try again!',
          errorButtonExistTitle: 'Button found',
          errorButtonExistDescription:
            'This button already exists in our system. Please try again with another button.',
          unConnectedShellyButton:
            'To continue, please connect your device to the button network!',
          buttonNotReady:
            'The button is not fully configured. Copy and paste the link into your browser and press enter!'
        },
        home: {
          panicButton: 'Request Support',
          alertTitleExitApp: 'Exit application',
          alertDescriptionExitApp:
            'Are you sure you want to exit the application?',
          shareToVehicle:
            "I'm sharing this application with you, which will support you request assistance from our community whenever you need it. To do so, you must install the application and register as a vehicle. This way, you can enjoy its services and join our community.",
          share:
            "I'm sharing this application with you, which will support you request assistance from our community whenever you need it. To do so, you must install the application and register with the code I've attached. This way, you can enjoy its services and join our community.",
          shareTitle: 'Hi, this app is great!',
          code: 'My group code is',
          link: 'The link',
          descriptionAlertNavigation:
            'Easily reach the user by navigating from your map!'
        },
        notifications: {
          title: 'I need support!',
          body: 'I have an event in progress and would like to have your assistance.',
          errorDistanceTitle: 'Shipping error',
          errorDistanceDescription:
            'Apparently, you are out of coverage to send the notification.',
          disabledTitle: 'User disabled',
          disabledDescription:
            'To activate your user, please contact our technical support. You can find this option in the main menu.'
        },
        qrScan: {
          title:
            'Scan the QR and enter your data to register as a co-worker or family member of your parent account and get your first attendance notification sent!'
        },
        network: {
          alertErrorTitle: 'Network Error',
          alertErrorDescription:
            'Your current network does not have internet access.'
        },
        update: {
          updateTitle: 'App update',
          updateDescription:
            'Please download the latest version from the application store to continue using our services.'
        }
      }
    },
    es: {
      translation: {
        drawer: {
          home: 'Inicio',
          profile: 'Perfil',
          users: 'Usuarios',
          buttons: 'Botones',
          preferences: 'Preferencias',
          darkTheme: 'Tema Oscuro',
          supportingEntities: 'Entidades de Apoyo',
          aliasName: 'Alias',
          notify: 'Notificar',
          groupName: 'Grupo',
          support: 'Soporte',
          shareTitle: '¡Hola, necesito ayuda!',
          shareMessage:
            'Hola, necesito ayuda con algo que está ocurriendo en mi aplicación.',
          shareSubject: 'Soporte Técnico'
        },
        employeesView: {
          banner:
            'A continuación, encontrarás una lista de los usuarios registrados en tu tienda o residencia. ¡Puedes eliminarlos o agregarlos usando el botón flotante!',
          employeeNotFound:
            'No hemos encontrado usuarios registrados en tu tienda o residencia. Te invitamos a ver el siguiente video para aprender cómo registrar uno.',
          alertTitleErrorDeleteUser: 'Eliminar usuario',
          alertDescriptionErrorDeleteUser:
            '¿Estás seguro de que deseas eliminar a este usuario? Si es así, presiona el botón Aceptar.'
        },
        notifyView: {
          banner:
            'A continuación, encontrarás una lista de las notificaciones registradas en tu tienda o residencia.',
          notifyNotFound:
            'No hemos encontrado notificaciones registradas en tu tienda o residencia.',
          notifySend: 'La notificación fue enviada'
        },
        buttonsView: {
          button: 'Botón',
          banner:
            'A continuación, encontrarás una lista de los botones registrados en tu tienda o residencia. ¡Puedes eliminarlos o agregarlos usando el botón flotante!',
          buttonsNotFound:
            'No hemos encontrado botones registrados en tu tienda o residencia. Te invitamos a ver el siguiente video para aprender cómo crear uno.',
          alertTitleErrorDeleteButton: 'Eliminar botón',
          alertDescriptionErrorDeleteButton:
            '¿Estás seguro de que deseas eliminar este botón? Si es así, presiona el botón Aceptar.',
          buttonFindTitle:
            'Hemos detectado el siguiente botón. Para agregarlo a tu lista, haz clic en el botón de abajo.',
          buttonStatus: 'Estado',
          buttonConnected: 'Conectado',
          buttonUnconnected: 'Desconectado',
          buttonIp: 'IP',
          searching: 'Buscando',
          noDetectedButton:
            'Botón no detectado. Desliza hacia abajo para buscar de nuevo.'
        },
        geolocationAlert: {
          errorGPSTitle: 'Acceso denegado',
          errorGPSDescription:
            'Por favor habilita los servicios de GPS para continuar',
          errorLocationPermissionsAlert: 'Permiso denegado',
          descriptionErrorLocationPermissionsAlert:
            'Has denegado el uso de la geolocalización. Para habilitarlo, deberás desinstalar la aplicación e instalarla de nuevo.'
        },
        profileView: {
          titleAlertRemoveUser: 'Eliminar usuario',
          descriptionAlertRemoveUser:
            '¿Estás seguro que deseas eliminar tu usurio?'
        },
        profileTitle:
          'A continuación, encontrarás tus datos de perfil registrados en nuestro sistema. Si lo deseas, puedes actualizarlos aquí mismo.',
        adminFormView: {
          names: 'Nombres',
          lastNames: 'Apellidos',
          email: 'Correo Electrónico',
          address: 'Dirección',
          city: 'Ciudad',
          country: 'País',
          state: 'Estado',
          aliasName: 'Alias',
          group: 'Número de Grupo',
          groupAlias: 'Nombre de grupo',
          placeHolderAliasGroup: 'Nombre de mi comunidad',
          alertGroupFoundTitle: 'Grupo no encontrado',
          alertGroupFoundDescription:
            'El código de grupo no existe en nuestro sistema. Por favor, inténtalo de nuevo o crea un nuevo grupo si es necesario.',
          aliasPlaceHolder: 'Cafetería/Unidad 3 res 201',
          newGroup: 'NUEVO GRUPO',
          existentGroup: 'GRUPO EXISTENTE'
        },
        registerView: {
          banner:
            'Recuerda agregar tus usuarios o empleados desde el menú principal en la opciónRecuerda agregar a tu cuenta tu grupo familiar o grupo de empleados desde el menú principal en la opción',
          titleCreateAccountAdmin: 'Crear una cuenta',
          titleCreateAccountUser: 'Unirse a una cuenta registrada',
          errorUserRegisterTitle: 'Cuenta existente',
          errorUserRegisterDescription:
            'La cuenta ya existe en nuestro sistema. Por favor, prueba con otro número de teléfono.',
          errorRegisterTitle: 'Error durante el registro',
          errorRegisterDescription:
            'Todos los campos son obligatorios, por favor, verifica e intenta nuevamente.'
        },
        loginView: {
          title: 'Inicia sesión con tu número de teléfono celular.',
          signIn: 'Iniciar sesión',
          scanButton: 'Escanear y unirme',
          signUp: 'Registrarse',
          errorPhone: 'El número de teléfono no es válido o está vacío.',
          goBack: 'Atrás',
          errorUserNotExist: 'El usuario no existe en nuestro sistema.',
          errorEmail: 'El correo ingresado no es valido'
        },
        loginSplashView: {
          welcome: 'Bienvenido a',
          description:
            'Recuerda que en SafetyClick, encontrarás un aliado que te ayudará a notificar a toda tu comunidad sobre los eventos en los que necesitas atención de cada uno de ellos, lo que te facilitará ser más visible en esos momentos en los que más lo necesitas.'
        },
        onboarding: {
          titleOne: '¿Tienes una emergencia?',
          titleTwo: 'Con nuestro servicio de mensajería',
          titleThree: 'Somos tu mejor opción',
          titleFour: 'Necesitamos acceso a tu ubicación.',
          descriptionOne:
            'Olvídate de llamar al sistema de emergencia tradicional.',
          descriptionTwo:
            'Podrás informar a toda tu comunidad sobre lo que está sucediendo.',
          descriptionThree:
            'Para aquellos momentos en los que necesitas alertar sobre cualquier evento que esté ocurriendo.',
          descriptionFour:
            'Para garantizar que nuestra aplicación funcione correctamente, requerimos acceso a tu ubicación para completar tus datos de perfil adicionalmente.',
          next: 'Siguiente',
          skip: 'Omitir'
        },
        otp: {
          title: 'Verificación de código OTP',
          subTitle:
            'Se ha enviado un código OTP a tu teléfono celular. Introdúcelo a continuación.',
          error: 'El código no es válido. Inténtalo de nuevo.',
          resend: 'Reenviar',
          alertErrorTitleOtp: 'Error de OTP',
          alertErrorDescriptionOtp:
            'Hemos bloqueado todas las solicitudes de este dispositivo por una actividad inusual, Intenta de nuevo más tarde'
        },
        general: {
          phone: 'Teléfono',
          back: 'Atrás',
          clear: 'Limpiar',
          verify: 'Verificar',
          ok: 'Aceptar',
          cancel: 'Cancelar',
          send: 'Enviar',
          continue: 'Continuar',
          here: 'aquí.',
          scanning: 'Escaneo',
          loading: 'Cargando',
          continueBike: 'Continuar como vehículo',
          continueResidence: 'Continuar como residencia',
          vehicle: 'Vehículo',
          personalData: 'Tus datos personales',
          groupData: 'Los datos de tu grupo',
          copiedText: 'Texto copiado con éxito',
          preferences: 'Preferencias',
          removeAccount: 'Si deseas eliminar tu cuenta, da click',
          remove: 'Eliminar'
        },
        qrModal: {
          helperTitleQr:
            '¡Pide a tu compañero de trabajo o familiar que escanee este código desde su app para registrarse en tu tienda o residencia!',
          helperFooterQrFirst: 'Aprende cómo se hace, haz clic'
        },
        buttonsModal: {
          formTitle: 'Agrega la configuración de tu red',
          formTitleFinish: 'El último paso',
          descriptionLastStep:
            '1. Por favor da click al botón Continuar, si el botón no se ha configurado, copia y pega este enlace en tu navegador y presiona Enter.\n2. Cambia tu red actual para obtener acceso a Internet.',
          formCaption:
            'Por favor, ingresa la contraseña de tu red y presiona continuar.',
          networkName: 'ISS',
          networkPass: 'Contraseña',
          title: 'Selecciona tu red',
          helperTitleQr:
            '1. Conecta a la corriente y enciende tu botón.\n2. En tu teléfono, conéctate a la red Wi-Fi que comienza con shellybutton1.\n3. Vuelve a esta pantalla y selecciona tu red Wi-Fi de la lista de abajo.\n4. Sigue los siguientes pasos.',
          helperFooterQrFirst: 'Aprende cómo se hace, haz clic',
          internetError: 'Error de Internet, ¡inténtalo de nuevo!',
          errorButtonExistTitle: 'Botón encontrado',
          errorButtonExistDescription:
            'Este botón ya existe en nuestro sistema. Por favor, inténtalo de nuevo con otro botón.',
          unConnectedShellyButton:
            'Para continuar, por favor conecta tu dispositivo a la red del botón.',
          buttonNotReady:
            'El botón no está completamente configurado. Copia y pega el enlace en tu navegador y presiona Enter.'
        },
        home: {
          panicButton: 'Solicitar Soporte',
          alertTitleExitApp: 'Salir de la aplicación',
          alertDescriptionExitApp:
            '¿Estás seguro de que deseas salir de la aplicación?',
          shareToVehicle:
            'Estoy compartiendo esta aplicación contigo, la cual te ayudará a solicitar asistencia de nuestra comunidad siempre que la necesites. Para hacerlo, debes instalar la aplicación y registrarte como vehículo. De esta manera, podrás disfrutar de sus servicios y unirte a nuestra comunidad.',
          share:
            'Estoy compartiendo esta aplicación contigo, la cual te ayudará a solicitar asistencia de nuestra comunidad siempre que la necesites. Para hacerlo, debes instalar la aplicación y registrarte con el código que adjunto. De esta manera, podrás disfrutar de sus servicios y unirte a nuestra comunidad.',
          shareTitle: '¡Hola, esta aplicación es genial!',
          code: 'Mi código de grupo es',
          link: 'El enlace'
        },
        notifications: {
          title: 'Necesito soporte',
          body: 'Tengo un evento en curso y me gustaría contar con tu ayuda.',
          errorDistanceTitle: 'Error de envío',
          errorDistanceDescription:
            'Aparentemente, estás fuera del área de cobertura para enviar la notificación.',
          disabledTitle: 'Usuario deshabilitado',
          disabledDescription:
            'Para activar tu usuario, por favor, contacta a nuestro soporte técnico. Puedes encontrar esta opción en el menú principal.'
        },
        qrScan: {
          title:
            'Escana el QR e ingresa tus datos para registrarte como compañero de trabajo o familiar de tu cuenta padre y logra enviar primera notificación de asistencia!'
        },
        network: {
          alertErrorTitle: 'Error de Red',
          alertErrorDescription: 'Tu red actual no tiene acceso a Internet.'
        },
        update: {
          updateTitle: 'Actualización de la aplicación',
          updateDescription:
            'Por favor, descarga la última versión desde la tienda de aplicaciones para continuar utilizando nuestros servicios.'
        }
      }
    },
    it: {
      translation: {
        drawer: {
          home: 'Casa',
          profile: 'Profilo',
          users: 'Utenti',
          buttons: 'Pulsanti',
          preferences: 'Preferenze',
          darkTheme: 'Tema scuro',
          supportingEntities: 'Entità di supporto',
          aliasName: 'Alias',
          notify: 'Notifica',
          groupName: 'Gruppo',
          support: 'Supporto',
          shareTitle: 'Ciao, ho bisogno di assistenza!',
          shareMessage:
            'Ciao, ho bisogno di aiuto per qualcosa che sta accadendo nella mia applicazione.',
          shareSubject: 'Supporto tecnico'
        },
        employeesView: {
          banner:
            'Di seguito troverai un elenco degli utenti registrati nel tuo negozio o residenza. Puoi eliminarli o aggiungerli utilizzando il pulsante galleggiante!',
          employeeNotFound:
            'Non abbiamo trovato utenti registrati nel tuo negozio o residenza. Ti invitiamo a guardare il video seguente per imparare come registrarne uno.',
          alertTitleErrorDeleteUser: 'Elimina utente',
          alertDescriptionErrorDeleteUser:
            'Sei sicuro di voler eliminare questo utente? In tal caso, premi il pulsante OK.'
        },
        notifyView: {
          banner:
            'Di seguito troverai un elenco delle notifiche registrate nel tuo negozio o residenza.',
          notifyNotFound:
            'Non abbiamo trovato notifiche registrate nel tuo negozio o residenza.',
          notifySend: 'La notifica è stata inviata'
        },
        buttonsView: {
          button: 'Pulsante',
          banner:
            'Di seguito troverai un elenco dei pulsanti registrati nel tuo negozio o residenza. Puoi rimuoverli o aggiungerli utilizzando il pulsante galleggiante!',
          buttonsNotFound:
            'Non abbiamo trovato pulsanti registrati nel tuo negozio o residenza. Ti invitiamo a guardare il video seguente per imparare come crearne uno.',
          alertTitleErrorDeleteButton: 'Rimuovi pulsante',
          alertDescriptionErrorDeleteButton:
            'Sei sicuro di voler eliminare questo pulsante? In tal caso, premi il pulsante OK.',
          buttonFindTitle:
            'Abbiamo rilevato il seguente pulsante. Per aggiungerlo alla tua lista, fai clic sul pulsante qui sotto.',
          buttonStatus: 'Stato',
          buttonConnected: 'Connesso',
          buttonUnconnected: 'Non connesso',
          buttonIp: 'IP',
          searching: 'Ricerca',
          noDetectedButton:
            'Pulsante non rilevato. Scorri verso il basso per cercare di nuovo.'
        },
        geolocationAlert: {
          errorGPSTitle: 'Accesso negato',
          errorGPSDescription: 'Attivare i servizi GPS per continuare.',
          errorLocationPermissionsAlert: 'Permesso negato',
          descriptionErrorLocationPermissionsAlert:
            "Hai negato l'uso della geolocalizzazione. Per abilitarlo, dovrai disinstallare l'applicazione e installarla nuovamente."
        },
        profileView: {
          titleAlertRemoveUser: "Rimuovere l'utente",
          descriptionAlertRemoveUser:
            'Sei sicuro di aver rimosso il tuo utente?'
        },
        profileTitle:
          'Di seguito troverai i tuoi dati di profilo registrati nel nostro sistema. Se lo desideri, puoi aggiornarli qui stesso.',
        adminFormView: {
          names: 'Nomi',
          lastNames: 'Cognomi',
          email: 'Email',
          address: 'Indirizzo',
          city: 'Città',
          country: 'Paese',
          state: 'Stato',
          aliasName: 'Alias',
          group: 'Numero di Gruppo',
          groupAlias: 'Nome del gruppo',
          placeHolderAliasGroup: 'Nome della mia comunità',
          alertGroupFoundTitle: 'Gruppo non trovato',
          alertGroupFoundDescription:
            'Il codice del gruppo non esiste nel nostro sistema. Per favore, riprova o crea un nuovo gruppo se necessario.',
          aliasPlaceHolder: 'Caffetteria/Unità 3 res 201',
          newGroup: 'NUOVO GRUPPO',
          existentGroup: 'GRUPPO ESISTENTE'
        },
        registerView: {
          banner:
            "Ricordatevi di aggiungere il vostro gruppo familiare o il gruppo di dipendenti al vostro account dal menu principale nell'opzione",
          titleCreateAccountAdmin: 'Crea un account',
          titleCreateAccountUser: 'Unisciti a un account registrato',
          errorUserRegisterTitle: 'Account esistente',
          errorUserRegisterDescription:
            "L'account esiste già nel nostro sistema. Per favore, prova con un altro numero di telefono.",
          errorRegisterTitle: 'Errore durante la registrazione',
          errorRegisterDescription:
            'Tutti i campi sono obbligatori, per favore controlla e riprova.'
        },
        loginView: {
          title: 'Accedi con il tuo numero di cellulare!',
          signIn: 'Accedi',
          scanButton: 'Scansione e unione',
          signUp: 'Iscriviti',
          errorPhone: 'Il numero di telefono non è valido o è vuoto.',
          goBack: 'Indietro',
          errorUserNotExist: "L'utente non esiste nel nostro sistema.",
          errorEmail: "L'indirizzo email inserito non è valido"
        },
        loginSplashView: {
          welcome: 'Benvenuto su',
          description:
            "Ricorda che su SafetyClick troverai un alleato che ti aiuterà a notificare a tutta la tua comunità gli eventi in cui hai bisogno dell'attenzione di ciascuno di loro, rendendoti più visibile nei momenti in cui ne hai più bisogno."
        },
        onboarding: {
          titleOne: "Hai un'emergenza?",
          titleTwo: 'Con il nostro servizio di messaggistica',
          titleThree: 'Siamo la tua migliore opzione',
          titleFour: "Abbiamo bisogno dell'accesso alla tua posizione!",
          descriptionOne:
            'Dimentica di chiamare il sistema di emergenza tradizionale.',
          descriptionTwo:
            'Potrai informare tutta la tua comunità su ciò che sta accadendo.',
          descriptionThree:
            'Per quei momenti in cui devi avvertire di qualsiasi evento in corso.',
          descriptionFour:
            "Per garantire il corretto funzionamento della nostra applicazione, richiediamo l'accesso alla tua posizione in modo da poter completare i dati del tuo profilo in modo aggiuntivo.",
          next: 'Avanti',
          skip: 'Salta'
        },
        otp: {
          title: 'Verifica del codice OTP',
          subTitle:
            'È stato inviato un codice OTP al tuo cellulare. Inseriscilo di seguito.',
          error: 'Il codice non è valido. Per favore, riprova.',
          resend: 'Rinvia',
          alertErrorTitleOtp: 'Error de OTP',
          alertErrorDescriptionOtp:
            "Abbiamo bloccato tutte le richieste da questo dispositivo a causa di un'attività insolita; riprovare più tardi."
        },
        general: {
          phone: 'Telefono',
          back: 'Indietro',
          clear: 'Cancella',
          verify: 'Verifica',
          ok: 'OK',
          cancel: 'Annulla',
          send: 'Invia',
          continue: 'Continua',
          here: 'qui.',
          scanning: 'Scansione',
          loading: 'Caricamento',
          continueBike: 'Continua come veicolo',
          continueResidence: 'Continua come residenza',
          vehicle: 'Veicolo',
          personalData: 'I vostri dati personali',
          groupData: 'I dati del vostro gruppo',
          copiedText: 'Testo copiato con successo',
          preferences: 'Preferenze',
          removeAccount:
            'Se si desidera rimuovere il proprio account, fare clic',
          remove: 'Rimuovi'
        },
        qrModal: {
          helperTitleQr:
            'Chiedete al vostro collega o parente di scansionare questo codice dalla loro app per registrarsi al vostro negozio o alla vostra residenza!',
          helperFooterQrFirst: 'Scopri come si fa, fai clic'
        },
        buttonsModal: {
          formTitle: 'Aggiungi le impostazioni della tua rete',
          formTitleFinish: "L'ultimo passo",
          descriptionLastStep:
            "1. Se il pulsante non è stato impostato, copiare e incollare questo link nel browser e premere Invio.\n2. Cambia la tua rete attuale per ottenere l'accesso a Internet.",
          formCaption: 'Inserisci la password della tua rete e premi Continua.',
          networkName: 'ISS',
          networkPass: 'Password',
          title: 'Seleziona la tua rete',
          helperTitleQr:
            "1. Collegare all'alimentazione e accendere il tuo pulsante.\n2. Sul tuo telefono, collegati alla rete Wi-Fi che inizia con shellybutton1.\n3. Torna a questa schermata e seleziona la tua rete Wi-Fi dall'elenco sottostante.\n4. Segui i passaggi successivi.",
          helperFooterQrFirst: 'Scopri come si fa, fai clic',
          internetError: 'Errore di Internet, riprova!',
          errorButtonExistTitle: 'Pulsante trovato',
          errorButtonExistDescription:
            'Questo pulsante esiste già nel nostro sistema. Per favore, riprova con un altro pulsante.',
          unConnectedShellyButton:
            'Per continuare, ti preghiamo di connettere il tuo dispositivo alla rete del pulsante.',
          buttonNotReady:
            'Il pulsante non è completamente configurato. Copia e incolla il link nel tuo browser e premi Invio.'
        },
        home: {
          panicButton: 'Richiedi Supporto',
          alertTitleExitApp: "Esci dall'applicazione",
          alertDescriptionExitApp:
            "Sei sicuro di voler uscire dall'applicazione?",
          shareToVehicle:
            "Sto condividendo questa applicazione con te, che ti aiuterà a richiedere assistenza dalla nostra comunità ogni volta che ne avrai bisogno. Per farlo, devi installare l'applicazione e registrarti come veicolo. In questo modo, potrai usufruire dei suoi servizi e unirti alla nostra comunità.",
          share:
            "Sto condividendo questa applicazione con te, che ti aiuterà a richiedere assistenza dalla nostra comunità ogni volta che ne avrai bisogno. Per farlo, devi installare l'applicazione e registrarti con il codice che allego. In questo modo, potrai usufruire dei suoi servizi e unirti alla nostra comunità.",
          shareTitle: 'Ciao, questa app è fantastica!',
          code: 'Il mio codice di gruppo è',
          link: 'Il link'
        },
        notifications: {
          title: 'Ho bisogno di assistenza!',
          body: 'Ho un evento in corso e vorrei il tuo aiuto.',
          errorDistanceTitle: 'Errore di spedizione',
          errorDistanceDescription:
            "Sembra che tu sia fuori dalla copertura per l'invio della notifica.",
          disabledTitle: 'Utente disabilitato',
          disabledDescription:
            'Per attivare il tuo utente, per favore contatta il nostro supporto tecnico. Puoi trovare questa opzione nel menu principale.'
        },
        qrScan: {
          title:
            'Scansiona il QR e inserisci i tuoi dati per registrarti come collaboratore o familiare del tuo account genitore e ricevere la prima notifica di presenza!'
        },
        network: {
          alertErrorTitle: 'Errore di Rete',
          alertErrorDescription:
            'La tua rete attuale non ha accesso a Internet.'
        },
        update: {
          updateTitle: "Aggiornamento dell'applicazione",
          updateDescription:
            "Per favore, scarica l'ultima versione dal negozio delle applicazioni per continuare a utilizzare i nostri servizi."
        }
      }
    },
    pt: {
      translation: {
        drawer: {
          home: 'Casa',
          profile: 'Perfil',
          users: 'Usuários',
          buttons: 'Botões',
          preferences: 'Preferências',
          darkTheme: 'Tema Escuro',
          supportingEntities: 'Entidades de Apoio',
          aliasName: 'Apelido',
          notify: 'Notificação',
          groupName: 'Grupo',
          support: 'Suporte',
          shareTitle: 'Olá, preciso de ajuda!',
          shareMessage:
            'Olá, preciso de ajuda com algo acontecendo na minha aplicação.',
          shareSubject: 'Suporte Técnico'
        },
        employeesView: {
          banner:
            'Abaixo, você encontrará uma lista de usuários registrados na sua loja ou residência. Você pode excluí-los ou adicioná-los usando o botão flutuante!',
          employeeNotFound:
            'Não encontramos nenhum usuário registrado na sua loja ou residência. Convidamos você a assistir ao vídeo a seguir para aprender como registrá-los.',
          alertTitleErrorDeleteUser: 'Remover usuário',
          alertDescriptionErrorDeleteUser:
            'Você tem certeza de que deseja excluir este usuário? Se sim, pressione o botão OK.'
        },
        notifyView: {
          banner:
            'Abaixo, você encontrará uma lista de notificações registradas na sua loja ou residência.',
          notifyNotFound:
            'Não encontramos nenhuma notificação registrada na sua loja ou residência.',
          notifySend: 'A notificação foi enviada'
        },
        buttonsView: {
          button: 'Botão',
          banner:
            'Abaixo, você encontrará uma lista de botões registrados na sua loja ou residência. Você pode removê-los ou adicioná-los usando o botão flutuante!',
          buttonsNotFound:
            'Não encontramos nenhum botão registrado na sua loja ou residência. Convidamos você a assistir ao vídeo a seguir para aprender como criar um.',
          alertTitleErrorDeleteButton: 'Remover botão',
          alertDescriptionErrorDeleteButton:
            'Você tem certeza de que deseja excluir este botão? Se sim, pressione o botão OK.',
          buttonFindTitle:
            'Detectamos o seguinte botão. Para adicioná-lo à sua lista, clique no botão abaixo.',
          buttonStatus: 'Status',
          buttonConnected: 'Conectado',
          buttonUnconnected: 'Não Conectado',
          buttonIp: 'IP',
          searching: 'Procurando',
          noDetectedButton:
            'Botão não detectado. Deslize para baixo para buscar novamente.'
        },
        geolocationAlert: {
          errorGPSTitle: 'Acesso negado',
          errorGPSDescription: 'Active os serviços GPS para continuar.',
          errorLocationPermissionsAlert: 'Permissão negada',
          descriptionErrorLocationPermissionsAlert:
            'Você negou o uso da geolocalização. Para ativá-la, será necessário desinstalar o aplicativo e instalá-lo novamente.'
        },
        profileView: {
          titleAlertRemoveUser: 'Remover utilizador',
          descriptionAlertRemoveUser:
            'Tem a certeza de que removeu o seu utilizador?'
        },
        profileTitle:
          'Abaixo, você encontrará seus dados de perfil registrados em nosso sistema. Se desejar, você pode atualizá-los aqui mesmo.',
        adminFormView: {
          names: 'Nomes',
          lastNames: 'Sobrenomes',
          email: 'E-mail',
          address: 'Endereço',
          city: 'Cidade',
          country: 'País',
          state: 'Estado',
          aliasName: 'Apelido',
          group: 'Número do Grupo',
          groupAlias: 'Nome do grupo',
          placeHolderAliasGroup: 'Nome da minha comunidade',
          alertGroupFoundTitle: 'Grupo não encontrado',
          alertGroupFoundDescription:
            'O código do grupo não existe em nosso sistema. Por favor, tente novamente ou crie um novo grupo, se necessário.',
          aliasPlaceHolder: 'Cafeteria/Unidade 3 res 201',
          newGroup: 'NOVO GRUPO',
          existentGroup: 'GRUPO EXISTENTE'
        },
        registerView: {
          banner:
            'Não se esqueça de adicionar o seu grupo familiar ou grupo de empregados à sua conta a partir do menu principal na opção',
          titleCreateAccountAdmin: 'Criar uma conta',
          titleCreateAccountUser: 'Junte-se a uma conta registrada',
          errorUserRegisterTitle: 'Conta existente',
          errorUserRegisterDescription:
            'A conta já existe em nosso sistema. Por favor, tente outro número de telefone.',
          errorRegisterTitle: 'Erro durante o registro',
          errorRegisterDescription:
            'Todos os campos são obrigatórios, por favor, verifique e tente novamente.'
        },
        loginView: {
          title: 'Faça login com seu número de celular!',
          signIn: 'Entrar',
          scanButton: 'Digitalizar e aderir',
          signUp: 'Cadastrar',
          errorPhone: 'O número de telefone não é válido ou está vazio',
          goBack: 'Voltar',
          errorUserNotExist: 'O usuário não existe em nosso sistema.',
          errorEmail: 'O email inserido não é válido'
        },
        loginSplashView: {
          welcome: 'Bem-vindo ao',
          description:
            'Lembre-se de que no SafetyClick você encontrará um aliado que o ajudará a notificar toda a sua comunidade sobre os eventos que necessitam de atenção de cada um deles, tornando você mais visível nos momentos em que mais precisa.'
        },
        onboarding: {
          titleOne: 'Você tem uma emergência?',
          titleTwo: 'Com nosso serviço de mensagens',
          titleThree: 'Nós somos sua melhor opção',
          titleFour: 'Precisamos de acesso à sua localização!',
          descriptionOne:
            'Esqueça a ligação para o sistema de emergência tradicional.',
          descriptionTwo:
            'Você poderá informar toda a sua comunidade sobre o que está acontecendo.',
          descriptionThree:
            'Para os momentos em que você precisa avisar sobre qualquer evento que está acontecendo.',
          descriptionFour:
            'Para garantir que nosso aplicativo funcione corretamente, precisamos de acesso à sua localização para que possamos completar seus dados de perfil.',
          next: 'Próximo',
          skip: 'Pular'
        },
        otp: {
          title: 'Verificação de código OTP',
          subTitle:
            'Um código OTP foi enviado para o seu celular. Digite-o abaixo.',
          error: 'O código não é válido. Por favor, tente novamente.',
          resend: 'Reenviar',
          alertErrorTitleOtp: 'OTP Errore',
          alertErrorDescriptionOtp:
            'Bloqueámos todos os pedidos deste dispositivo devido a atividade invulgar; tente novamente mais tarde.'
        },
        general: {
          phone: 'Telefone',
          back: 'Voltar',
          clear: 'Limpar',
          verify: 'Verificar',
          ok: 'OK',
          cancel: 'Cancelar',
          send: 'Enviar',
          continue: 'Continuar',
          here: 'aqui.',
          scanning: 'Escaneando',
          loading: 'Carregando',
          continueBike: 'Continuar como veículo',
          continueResidence: 'Continuar como residência',
          vehicle: 'Veículo',
          personalData: 'Os seus dados pessoais',
          groupData: 'Os dados do seu grupo',
          copiedText: 'Texto copiado com sucesso',
          preferences: 'Preferências',
          removeAccount: 'Se pretender remover a sua conta, clique',
          remove: 'Remover'
        },
        qrModal: {
          helperTitleQr:
            'Peça ao seu colega de trabalho ou familiar para digitalizar este código a partir da sua aplicação para se registar na sua loja ou residência!',
          helperFooterQrFirst: 'Saiba como fazer, clique'
        },
        buttonsModal: {
          formTitle: 'Adicione as configurações da sua rede',
          formTitleFinish: 'A última etapa',
          descriptionLastStep:
            '1. Clique no botão Continuar. Se o botão não estiver definido, copie e cole esta ligação no seu browser e prima Enter.\n2. Altere sua rede atual para obter acesso à Internet.',
          formCaption: 'Insira a senha da sua rede e pressione Continuar!',
          networkName: 'ISS',
          networkPass: 'Senha',
          title: 'Selecione sua rede!',
          helperTitleQr:
            '1. Ligar à corrente eléctrica e ligar o seu botão.\n2. No seu telefone, conecte-se à rede Wi-Fi que começa com shellybutton1.\n3. Volte para esta tela e selecione sua rede Wi-Fi na lista abaixo.\n4. Siga os próximos passos.',
          helperFooterQrFirst: 'Saiba como fazer, clique',
          internetError: 'Erro de Internet, tente novamente!',
          errorButtonExistTitle: 'Botão encontrado',
          errorButtonExistDescription:
            'Este botão já existe em nosso sistema. Por favor, tente com outro botão.',
          unConnectedShellyButton:
            'Para continuar, por favor, conecte seu dispositivo à rede do botão!',
          buttonNotReady:
            'O botão não está totalmente configurado. Copie e cole o link no seu navegador e pressione Enter.'
        },
        home: {
          panicButton: 'Solicitar Suporte',
          alertTitleExitApp: 'Sair do aplicativo',
          alertDescriptionExitApp:
            'Você tem certeza de que deseja sair do aplicativo?',
          shareToVehicle:
            'Estou compartilhando este aplicativo com você, que o ajudará a solicitar assistência de nossa comunidade sempre que precisar. Para fazer isso, você precisa instalar o aplicativo e se registrar como veículo. Dessa forma, você pode desfrutar dos serviços e se juntar à nossa comunidade.',
          share:
            'Estou compartilhando este aplicativo com você, que o ajudará a solicitar assistência de nossa comunidade sempre que precisar. Para fazer isso, você precisa instalar o aplicativo e se registrar com o código que anexei. Dessa forma, você pode desfrutar dos serviços e se juntar à nossa comunidade.',
          shareTitle: 'Olá, este aplicativo é ótimo!',
          code: 'Meu código de grupo é',
          link: 'O link'
        },
        notifications: {
          title: 'Eu preciso de suporte!',
          body: 'Tenho um evento em andamento e gostaria da sua ajuda.',
          errorDistanceTitle: 'Erro no envio',
          errorDistanceDescription:
            'Parece que você está fora da cobertura para o envio da notificação.',
          disabledTitle: 'Usuário desabilitado',
          disabledDescription:
            'Para ativar seu usuário, entre em contato com nosso suporte técnico. Você pode encontrar essa opção no menu principal.'
        },
        qrScan: {
          title:
            'Digitalize o QR e introduza os seus dados para se registar como colega de trabalho ou familiar da sua conta principal e receba a sua primeira notificação de presença!'
        },
        network: {
          alertErrorTitle: 'Erro de Rede',
          alertErrorDescription: 'Sua rede atual não tem acesso à Internet.'
        },
        update: {
          updateTitle: 'Atualização do Aplicativo',
          updateDescription:
            'Por favor, baixe a versão mais recente na loja de aplicativos para continuar usando nossos serviços.'
        }
      }
    },
    fr: {
      translation: {
        drawer: {
          home: 'Accueil',
          profile: 'Profil',
          users: 'Utilisateurs',
          buttons: 'Boutons',
          preferences: 'Préférences',
          darkTheme: 'Thème sombre',
          supportingEntities: 'Entités de support',
          aliasName: 'Alias',
          notify: 'Notifier',
          groupName: 'Groupe',
          support: 'Support',
          shareTitle: "Salut, j'ai besoin d'aide !",
          shareMessage:
            "Salut, j'ai besoin d'aide pour quelque chose qui se passe dans mon application.",
          shareSubject: 'Support technique'
        },
        employeesView: {
          banner:
            "Ci-dessous, vous trouverez une liste des utilisateurs enregistrés dans votre boutique ou résidence. Vous pouvez les supprimer ou les ajouter à l'aide du bouton flottant !",
          employeeNotFound:
            "Nous n'avons trouvé aucun utilisateur enregistré dans votre boutique ou résidence. Nous vous invitons à regarder la vidéo suivante pour apprendre comment les enregistrer.",
          alertTitleErrorDeleteUser: "Supprimer l'utilisateur",
          alertDescriptionErrorDeleteUser:
            "Êtes-vous sûr de vouloir supprimer cet utilisateur ? Si c'est le cas, appuyez sur le bouton OK."
        },
        notifyView: {
          banner:
            'Ci-dessous, vous trouverez une liste des notifications enregistrées dans votre boutique ou résidence.',
          notifyNotFound:
            "Nous n'avons trouvé aucune notification enregistrée dans votre boutique ou résidence.",
          notifySend: 'La notification a été envoyée'
        },
        buttonsView: {
          button: 'Bouton',
          banner:
            "Ci-dessous, vous trouverez une liste des boutons enregistrés dans votre boutique ou résidence. Vous pouvez les supprimer ou les ajouter à l'aide du bouton flottant !",
          buttonsNotFound:
            "Nous n'avons trouvé aucun bouton enregistré dans votre boutique ou résidence. Nous vous invitons à regarder la vidéo suivante pour apprendre comment en créer un.",
          alertTitleErrorDeleteButton: 'Supprimer le bouton',
          alertDescriptionErrorDeleteButton:
            "Êtes-vous sûr de vouloir supprimer ce bouton ? Si c'est le cas, appuyez sur le bouton OK.",
          buttonFindTitle:
            "Nous avons détecté le bouton suivant. Pour l'ajouter à votre liste, cliquez sur le bouton ci-dessous.",
          buttonStatus: 'Statut',
          buttonConnected: 'Connecté',
          buttonUnconnected: 'Non connecté',
          buttonIp: 'IP',
          searching: 'Recherche en cours',
          noDetectedButton:
            'Bouton non détecté. Faites glisser vers le bas pour rechercher à nouveau.'
        },
        geolocationAlert: {
          errorGPSTitle: 'Accès refusé',
          errorGPSDescription:
            'Veuillez activer les services GPS pour continuer.',
          errorLocationPermissionsAlert: 'Autorisation refusée',
          descriptionErrorLocationPermissionsAlert:
            "Vous avez refusé l'utilisation de la géolocalisation. Pour l'activer, vous devrez désinstaller l'application et la réinstaller."
        },
        profileView: {
          titleAlertRemoveUser: "Supprimer l'utilisateur",
          descriptionAlertRemoveUser:
            'Êtes-vous sûr de supprimer votre utilisateur?'
        },
        profileTitle:
          'Ci-dessous, vous trouverez les données de votre profil enregistrées dans notre système. Si vous le souhaitez, vous pouvez les mettre à jour ici même.',
        adminFormView: {
          names: 'Noms',
          lastNames: 'Noms de famille',
          email: 'E-mail',
          address: 'Adresse',
          city: 'Ville',
          country: 'Pays',
          state: 'État',
          aliasName: 'Alias',
          group: 'Numéro de groupe',
          groupAlias: 'Nom du groupe',
          placeHolderAliasGroup: 'Nom de ma communauté',
          alertGroupFoundTitle: 'Groupe introuvable',
          alertGroupFoundDescription:
            "Le code du groupe n'existe pas dans notre système. Veuillez réessayer ou créer un nouveau groupe si nécessaire.",
          aliasPlaceHolder: 'Café/Unité 3 rés. 201',
          newGroup: 'NOUVEAU GROUPE',
          existentGroup: 'GROUPE EXISTANT'
        },
        registerView: {
          banner:
            "N'oubliez pas d'ajouter votre groupe familial ou votre groupe d'employés à votre compte à partir du menu principal dans l'option",
          titleCreateAccountAdmin: 'Créer un compte',
          titleCreateAccountUser: 'Rejoindre un compte enregistré',
          errorUserRegisterTitle: 'Compte existant',
          errorUserRegisterDescription:
            'Le compte existe déjà dans notre système. Veuillez essayer avec un autre numéro de téléphone.',
          errorRegisterTitle: `Erreur lors de l'inscription`,
          errorRegisterDescription:
            'Tous les champs sont obligatoires, veuillez vérifier et réessayer.'
        },
        loginView: {
          title: 'Connectez-vous avec votre numéro de téléphone portable !',
          signIn: 'Se connecter',
          scanButton: 'Numériser et joindre',
          signUp: "S'inscrire",
          errorPhone: "Le numéro de téléphone n'est pas valide ou est vide",
          goBack: 'Retour',
          errorUserNotExist: "L'utilisateur n'existe pas dans notre système.",
          errorEmail: "L'adresse e-mail saisie n'est pas valide"
        },
        loginSplashView: {
          welcome: 'Bienvenue sur',
          description:
            'Rappelez-vous que sur SafetyClick, vous trouverez un allié qui vous aidera à informer toute votre communauté des événements pour lesquels vous avez besoin de leur attention, vous rendant plus visible lorsque vous en avez le plus besoin.'
        },
        onboarding: {
          titleOne: 'Avez-vous une urgence ?',
          titleTwo: 'Avec notre service de messagerie',
          titleThree: 'Nous sommes votre meilleure option',
          titleFour: "Nous avons besoin d'accéder à votre emplacement !",
          descriptionOne: "Oubliez l'appel au système d'urgence traditionnel.",
          descriptionTwo:
            'Vous pourrez informer toute votre communauté de ce qui se passe.',
          descriptionThree:
            'Pour les moments où vous devez avertir de tout événement en cours.',
          descriptionFour:
            "Pour garantir le bon fonctionnement de notre application, nous avons besoin d'accéder à votre emplacement afin de compléter vos données de profil.",
          next: 'Suivant',
          skip: 'Passer'
        },
        otp: {
          title: 'Vérification du code OTP',
          subTitle:
            'Un code OTP a été envoyé sur votre téléphone portable. Entrez-le ci-dessous.',
          error: "Le code n'est pas valide. Veuillez réessayer.",
          resend: 'Renvoyer',
          alertErrorTitleOtp: 'OTP Errore',
          alertErrorDescriptionOtp:
            "Nous avons bloqué toutes les demandes provenant de cet appareil en raison d'une activité inhabituelle ; réessayez plus tard."
        },
        general: {
          phone: 'Téléphone',
          back: 'Retour',
          clear: 'Effacer',
          verify: 'Vérifier',
          ok: 'OK',
          cancel: 'Annuler',
          send: 'Envoyer',
          continue: 'Continuer',
          here: 'ici.',
          scanning: 'Balayage',
          loading: 'Chargement',
          continueBike: 'Continuer en tant que véhicule',
          continueResidence: 'Continuer en tant que résidence',
          vehicle: 'Véhicule',
          personalData: 'Vos données personnelles',
          groupData: 'Les coordonnées de votre groupe',
          copiedText: 'Texte copié avec succès',
          preferences: 'Préférences',
          removeAccount: 'Si vous souhaitez supprimer votre compte, cliquez',
          remove: 'Supprimer'
        },
        qrModal: {
          helperTitleQr:
            "Demandez à votre collègue ou à un membre de votre famille de scanner ce code à partir de son application pour s'inscrire dans votre magasin ou votre résidence !",
          helperFooterQrFirst: 'Découvrez comment faire, cliquez'
        },
        buttonsModal: {
          formTitle: 'Ajoutez les paramètres de votre réseau',
          formTitleFinish: 'La dernière étape',
          descriptionLastStep:
            "1. Veuillez cliquer sur le bouton Continuer. Si le bouton n'a pas été placé, copiez et collez ce lien dans votre navigateur et appuyez sur Entrée.\n2. Modifiez votre réseau actuel pour avoir accès à Internet.",
          formCaption:
            'Saisissez le mot de passe de votre réseau et appuyez sur Continuer !',
          networkName: 'ISS',
          networkPass: 'Mot de passe',
          title: 'Sélectionnez votre réseau !',
          helperTitleQr:
            "1. Connecter à l'alimentation et mettre en marche votre bouton.\n2. Sur votre téléphone, connectez-vous au réseau Wi-Fi commençant par shellybutton1.\n3. Revenez à cet écran et sélectionnez votre réseau Wi-Fi dans la liste ci-dessous.\n4. Suivez les étapes suivantes.",
          helperFooterQrFirst: 'Découvrez comment faire, cliquez',
          internetError: 'Erreur Internet, réessayez !',
          errorButtonExistTitle: 'Bouton trouvé',
          errorButtonExistDescription:
            'Ce bouton existe déjà dans notre système. Veuillez réessayer avec un autre bouton.',
          unConnectedShellyButton:
            'Pour continuer, veuillez connecter votre appareil au réseau du bouton !',
          buttonNotReady:
            "Le bouton n'est pas entièrement configuré. Copiez et collez le lien dans votre navigateur, puis appuyez sur Entrée."
        },
        home: {
          panicButton: 'Demander du support',
          alertTitleExitApp: "Quitter l'application",
          alertDescriptionExitApp:
            "Êtes-vous sûr de vouloir quitter l'application ?",
          shareToVehicle:
            "Je partage cette application avec vous, qui vous aidera à demander de l'aide à notre communauté chaque fois que vous en aurez besoin. Pour ce faire, vous devez installer l'application et vous inscrire en tant que véhicule. De cette manière, vous pourrez profiter de nos services et rejoindre notre communauté.",
          share:
            "Je partage cette application avec vous, qui vous aidera à demander de l'aide à notre communauté chaque fois que vous en aurez besoin. Pour ce faire, vous devez installer l'application et vous inscrire avec le code que j'ai joint. De cette manière, vous pourrez profiter de nos services et rejoindre notre communauté.",
          shareTitle: 'Salut, cette application est géniale !',
          code: 'Mon code de groupe est',
          link: 'Le lien'
        },
        notifications: {
          title: "J'ai besoin de support !",
          body: "J'ai un événement en cours et j'aimerais votre aide.",
          errorDistanceTitle: "Erreur d'envoi",
          errorDistanceDescription:
            "Apparemment, vous n'êtes pas couvert pour l'envoi de la notification.",
          disabledTitle: 'Utilisateur désactivé',
          disabledDescription:
            'Pour activer votre utilisateur, veuillez contacter notre support technique. Vous trouverez cette option dans le menu principal.'
        },
        qrScan: {
          title:
            'Scannez le QR et entrez vos coordonnées pour vous inscrire en tant que collègue ou membre de la famille de votre compte parent et recevoir votre première notification de présence !'
        },
        network: {
          alertErrorTitle: 'Erreur de réseau',
          alertErrorDescription: "Votre réseau actuel n'a pas accès à Internet."
        },
        update: {
          updateTitle: "Mise à jour de l'application",
          updateDescription:
            "Veuillez télécharger la dernière version depuis le magasin d'applications pour continuer à utiliser nos services."
        }
      }
    }
  }
});

export default i18n;
