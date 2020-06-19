"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "Oups, appel actif déjà en cours",
  "MESSAGE_ACTIVE_CALL_HANGUP": "Il semble que vous êtes déjà en communication. Voulez vous raccrocher ?",
  "MESSAGE_ACTIVE_CALL_BACK": "Il semblre que vous étiez déjà en appel avant de quitter la dernière fois, Voulez-vous retourner à cet appel ?",
  "TITLE_INCOMING_CALL": "Appel entrant",
  "MESSAGE_INCOMING_CALL": "De ",
  "MESSAGE_NO_HANGUP_CALL": "Il n'y as pas d'appels à raccrocher.",
  "MESSAGE_ENTER_FILENAME": "Veuillez entrer le nom de fichier",
  "TITLE_ENABLE_VIDEO": "Voulez vous activer la video pour cet appel?",
  "MESSAGE_ENABLE_VIDEO": "La vidéo sera activée pour les prochains appels.",
  "TITLE_INSERT_BANNER": "Merci d'insérer le texte de bannière",
  "TITLE_INSERT_CANVAS_ID": "Merci d'insérer l'ID du Canvas",
  "TITLE_INSERT_LAYER": "Merci d'insérer la couche",
  "TITLE_TRANSFER": "Transferer le correspondant ?",
  "MESSAGE_TRANSFER": "Vers quelle destination voulez vous transférer cet appel ?",
  "LABEL_TRANSFER": "Destination",
  "MESSAGE_DISPLAY_SETTINGS": "Nous ne pouvons afficher les paramêtres de prévisualisation pendant un appel",
  "BUTTON_END_CALL": "Terminer l'appel",
  "BUTTON_CLOSE": "Fermer",
  "MESSAGE_PLAY": "Jouer",
  "MESSAGE_STOP": "Stop",
  "MESSAGE_RECORD": "Enregistrer",
  "MESSAGE_STOP_RECORD": "Arrêter l'enregistrement",
  "MESSAGE_SNAPSHOT": "Capture d'écran",
  "MESSAGE_VIDEO_MODE": "Mode Video",
  "MESSAGE_MUTE_MIC": "(des)activer Micro",
  "MESSAGE_MUTE_VIDEO": "(des)activer Video",
  "MESSAGE_FULLSCREEN": "Basculer en mode plein écran",
  "MESSAGE_SCREENSHARE": "Partage d'écran",
  "MESSAGE_OPEN_CLOSE_CHAT": "Ouvrir/Fermer le chat",
  "MESSAGE_SPEAKER": "Orateur",
  "MESSAGE_POPUP": "Popup",
  "CHAT_TITLE_MEMBERS": "Membres",
  "CHAT_TITLE": "Chat",
  "CHAT_NO_MEMBERS": "Il n'y as pas de membres actuellement.",
  "CHAT_GENERAL": "General",
  "CHAT_TITLE_KICK": "Ejecter",
  "CHAT_KICK": "Ejecter",
  "CHAT_TITLE_VIDEO_FLOOR": "Video Floor",
  "CHAT_FLOOR": "Floor",
  "CHAT_TITLE_TRANSFER": "Transferer",
  "CHAT_TRANSFER": "Transferer",
  "CHAT_BANNER": "Bannière",
  "CHAT_TITLE_SET": "Set",
  "CHAT_SET": "Set",
  "CHAT_TITLE_RESET": "Reset",
  "CHAT_RESET": "Reset",
  "CHAT_CANVAS": "Canvas",
  "CHAT_CANVAS_IN": "Canvas In",
  "CHAT_CANVAS_OUT": "Canvas Out",
  "CHAT_PREV": "Précédent",
  "CHAT_NEXT": "Suivant",
  "CHAT_LAYER": "Couche",
  "CHAT_AUDIO_VIDEO": "Audio/Video",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Activer/Désactiver micro",
  "CHAT_MUTE_MIC": "Désactiver le micro",
  "CHAT_UNMUTE_MIC": "Activer le micro",
  "CHAT_TITLE_MUTE_UNMUTE_VIDEO": "Activer/Désactiver video",
  "CHAT_NO_MESSAGES": "il n'y as pas de messages à afficher",
  "CHAT_SEND_MESSAGE": "Envoyer",
  "CHAT_TYPE_MESSAGE": "Saisir votre message ici...",
  "TITLE_CONTRIBUTORS": "Contributeurs",
  "MESSAGE_CONNECTION_UNTRUSTED": "Cette connection n'est pas certifiée sûre.",
  "MESSAGE_TOGGLE_NAVIGATION": "Basculer la navigation",
  "BANDWIDTH_INFO": "Information de bande passante",
  "BANDWIDTH_INFO_INCOMING": "Entrant:",
  "BANDWIDTH_INFO_OUTGOING": "Sortant:",
  "BANDWIDTH_INFO_VIDEO_RES": "Résolution vidéo:",
  "IN_CALL": "Appel en cours:",
  "LAST_CALL": "Dernier appel:   ",
  "OPEN_NEW_WINDOW": "Ouvrir une nouvelle fenêtre",
  "CHANGE_LOGIN_INFO": "Changer les informations utilisateur",
  "LOGOUT": "Deconnection",
  "ABOUT": "A propos",
  "HELP": "Aide",
  "CONTRIBUTORS": "Contributeurs",
  "TITLE_PREVIEW_SETTINGS": "Paramêtrer votre micro et caméra",
  "CAMERA_SETTINGS": "Camera:",
  "MIC_SETTINGS": "Microphone:",
  "SAVE": "Sauvegarder",
  "LOADING": "Chargement",
  "ERRORS" : "Erreurs",
  "CALLING_TO": "Appel sortant vers ",
  "CANCELLING": "Annulation en cours...",
  "DETERMINING_SPEED": "En train de déterminer votre bande passante...",
  "CALL_HISTORY": "Historique d'appel",
  "CLEAR_CALL_HISTORY": "Effacer l'historique",
  "NO_CALL_HISTORY": "Pas d'historique d'appel",
  "ENTER_EXTENSION": "Saisir une extension",
  "CALL_EXTENSION": "Appeler une extension",
  "LOGIN": "Nom d'utilisateur:",
  "LOGIN_INFORMATION": "Information utilisateur",
  "SAVE_LOGIN_INFORMATION": "Sauvegarder les informations utilisateurs",
  "INVALID_LOGIN_FIELDS": "Vérifiez les champs ci dessous et rééssayez.",
  "NAME": "Nom",
  "YOUR_NAME": "Votre nom",
  "EMAIL": "Email",
  "YOUR_EMAIL": "Votre email",
  "USER": "Utilisateur",
  "PASSWORD": "mot de passe",
  "CALLER_ID": "Numéro Appelant",
  "HOSTNAME": "Nom de domaine",
  "WEBSOCKET_URL": "URL Websocket",
  "SETTINGS": "Paramêtres",
  "DEVICE_SETTINGS": "Paramêtres de l'appareil",
  "SHARE_DEVICE": "Partager le périphérique",
  "SPEAKER": "Orateur:",
  "SPEAKER_FEATURE": "Votre navigateur ne semble pas supporter cette fonctionnalité",
  "PREVIEW_SETTINGS": "Paramêtres de prévisualisation",
  "REFRESH_DEVICE_LIST": "Rafraichir la liste des périphériques",
  "GENERAL_SETTINGS": "Paramêtres généraux:",
  "USE_VIDEO": "Utiliser la vidéo",
  "USE_STEREO_AUDIO": "Audio stereo",
  "USE_STUN": "Utiliser STUN",
  "SCALE_VIDEO": "Ajuster la résolution de la vidéo distante pour correspondre à la résolution de la caméra",
  "ASK_BEFORE_RECOVER": "Demander avant de récupérer un appel",
  "BEST_FRAME_RATE": "Meilleur taux de rafraichissement:",
  "AUDIO_SETTINGS": "Paramêtres audio:",
  "ECHO_CANCEL": "Anti-echo",
  "NOISE_SUPPRESSION": "Suppression du bruit",
  "HIGHPASS_FILTER": "Filtre passe-haut:",
  "VIDEO_SETTINGS": "Paramêtres vidéo:",
  "REMOTE_ENCODER": "Encodeur distant dédié activé",
  "AUTO_SPEED_RES": "Détecter automatiquement les paramêtres de bande passante et de résolution vidéo",
  "RECHECK_BANDWIDTH": "Revérifier la bande passante avant chaque appel",
  "CHECK_NETWORK_SPEED": "Verification de la vitesse de connection.",
  "VIDEO_QUALITY": "Qualité vidéo:",
  "MAX_INCOMING_BANDWIDTH": "Bande passante entrante maximale:",
  "MAX_OUTGOING_BANDWIDTH": "Bande passante sortante maximale:",
  "FACTORY_RESET": "Remise aux paramêtres par défaut",
  "SAVE_DEVICE_SETTINGS": "Sauvegarder les paramêtres de l'appareil.",
  "CHECK_RESOLUTION": "Vérification de la résolution .",
  "ERROR_RESOLUTION": "Erreur : erreur interne lors de la vérification de la résolution",
  "BROWSER_COMPATIBILITY": "Vérification de la compatibilité du navigateur.",
  "REFRESH_MEDIA_DEVICES": "Rafraichir les périphériques multimédias.",
  "BROWSER_WITHOUT_WEBRTC": "Erreur: votre navigateur ne supporte pas WebRTC.",
  "CHECK_PERMISSION_MEDIA": "Vérification des permissions multimédias",
  "CHECK_PROVISIONING_CONF": "Vérification de la configuration.",
  "CHECK_LOGIN": "Vérification du nom d'utilisateur",
  "CHECK_CONNECTION_SPEED": "Vérifiez votre vitesse de connection à Internet.",
  "ERROR_PERMISSION_MEDIA": "Erreur: La permission d'accéder aux périphériques multimedia as été refusée",
  "ERROR_PROVISIONING_CONF": "Erreur: La configuration as échouée.",
  "PLEASE_WAIT": "Merci de patienter...",
  "CANCEL": "Annuler",
  "CHAT_TITLE_VOL_MINUS": "Le volume -",
  "CHAT_TITLE_VOL_PLUS": "Le volume +",
  "CHAT_TITLE_GAIN_MINUS": "Gain -",
  "CHAT_TITLE_GAIN_PLUS": "Gain +",
  "CHAT_VOL_MINUS": "Le volume -",
  "CHAT_VOL_PLUS": "Le volume +",
  "CHAT_GAIN_MINUS": "Gain -",
  "CHAT_GAIN_PLUS": "Gain +",
  "LANGUAGE": "La langue:",
  "BROWSER_LANGUAGE": "la langue du navigateur",
  "BROWSER_SUPPORT_TITLE": "Navigateur non pris en charge",
  "BROWSER_SUPPORT_TEXT": "Le navigateur que vous utilisez n'est pas't appuyé par notre logiciel. Veuillez voir ci-dessous pour navigateur alternatif que vous pouvez utiliser. Une fois que vous avez choisi un autre navigateur vous'll soit en mesure d'accéder à la session. Lien à l'aide",
  "BROWSER_NAME_EDGE": "Bord",
  "BROWSER_VERSIONS_EDGE": "Tout",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "Tout",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "Tout",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "Tout",
  "MORE_SETTINGS": "Plus de Paramètres",
  "LESS_SETTINGS": "Moins Réglages",
  "YOUR_PASSWORD": "Votre mot de Passe",
  "VERSION": "Version: ",
  "GIT_REV": "Git Rev: ",
  "POWERED_BY": "Alimenté par: ",
  "PREVIOUS": "Précédent",
  "SET_LAYOUT_POSITION": "Définir la position mise en page .",
  "ENTER_LAYOUT_POSITION": "S'il vous plaît entrer la position mise en page. ",
  "LAYOUT_POSITION": "Position Mise en page",
  "DISCONNECTED": "Coupé",
  "CONNECTING": "De liaison",
  "CONNECTED": "Connecté",
  "COM_STATUS": "Etat de la communication.",
  "SCREEN_SHARE": "partage d'écran",
  "PRESENTER": "présentateur",
  "WATCHING_CANVAS": "Regarder Toile",
  "INPUT_CANVAS": "Toile d'entrée",
  "CLEAR_ALERTS": "alertes claires",
  "NO_LOG": "aucune donnée de journal",
  "CLICK_DIAL": "Cliquez pour composer",
  "SETTINGS_LOGIN": "Connectez-vous pour modifier les paramètres",
  "SETTINGS_USER": "Paramètres utilisateur",
  "SETTINGS_USER_LOGIN": "Connectez-vous pour modifier les paramètres utilisateur",
  "MENU_INFO": "Menu info",
  "CALL_FROM": "Appeler à partir de:",
  "ANSWER": "Répondre",
  "REJECT": "Rejeter",
  "ACTIVE": "actif",
  "PLEASE_ENTER": "S'il vous plaît entrer un valide ",
  "VIEW_ALERT": "Voir journal d'alerte ",
  "NO_CALL": "pas d'appel"
};
module.exports = messages;
