"use strict";
const messages = {
  "TITLE_ACTIVE_CALL": "Uy, llamada activa en curso.",
  "MESSAGE_ACTIVE_CALL_HANGUP": "Parece que estas en una llamada, Desea colgar?",
  "MESSAGE_ACTIVE_CALL_BACK": "Parece que estabas en una llamada la ultima vez, quieres regresar a eso?",
  "TITLE_INCOMING_CALL": "Llamada entrante",
  "MESSAGE_INCOMING_CALL": "Desde ",
  "MESSAGE_NO_HANGUP_CALL": "No hay ninguna llamada que colgar.",
  "MESSAGE_ENTER_FILENAME": "Por favor, indique el nombre del archivo.",
  "TITLE_ENABLE_VIDEO": "¿Quieres activar el video para esta convocatoria?",
  "MESSAGE_ENABLE_VIDEO": "Video estará activo durante las siguientes  llamadas.",
  "TITLE_INSERT_BANNER": "Por favor introduzca el texto del estandarte ",
  "TITLE_INSERT_CANVAS_ID": "Por favor, Introduzca el Id de lona",
  "TITLE_INSERT_LAYER": "Por favor inserte la capa",
  "TITLE_TRANSFER": "¿Transferencia de partido?",
  "MESSAGE_TRANSFER": "¿A qué destino quieres transferir esta llamada?",
  "LABEL_TRANSFER": "Destino",
  "MESSAGE_DISPLAY_SETTINGS": "No se puede mostrar la configuración durante una llamada",
  "BUTTON_END_CALL": "Finalizar llamada",
  "BUTTON_CLOSE": "Cerrar",
  "MESSAGE_PLAY": " Reproducir",
  "MESSAGE_STOP": "Parar",
  "MESSAGE_RECORD": "Grabar",
  "MESSAGE_STOP_RECORD": "Parar de grabar",
  "MESSAGE_SNAPSHOT": "Foto instantánea",
  "MESSAGE_VIDEO_MODE": "Modo de vídeo",
  "MESSAGE_MUTE_MIC": "(des) silenciar el micrófono",
  "MESSAGE_MUTE_VIDEO": "(des) silenciar el Video",
  "MESSAGE_FULLSCREEN": "Cambiar el modo de pantalla completa",
  "MESSAGE_SCREENSHARE": "Compartir la pantalla",
  "MESSAGE_OPEN_CLOSE_CHAT": "Abrir/cerrar Chat",
  "MESSAGE_SPEAKER": "Altavoz",
  "MESSAGE_POPUP": "Emergente",
  "CHAT_TITLE_MEMBERS": "Miembros",
  "CHAT_TITLE": "Chat",
  "CHAT_NO_MEMBERS": "No hay miembros para mostrar.",
  "CHAT_GENERAL": "General",
  "CHAT_TITLE_KICK": "Patear",
  "CHAT_KICK": "Patear",
  "CHAT_TITLE_VIDEO_FLOOR": "Piso Video",
  "CHAT_FLOOR": "Piso",
  "CHAT_TITLE_TRANSFER": "Transferir",
  "CHAT_TRANSFER": "Transferir",
  "CHAT_BANNER": "Estandarte",
  "CHAT_TITLE_SET": "Poner",
  "CHAT_SET": "Poner",
  "CHAT_TITLE_RESET": "Reajustar",
  "CHAT_RESET": "Reajustar ",
  "CHAT_CANVAS": "Lona",
  "CHAT_CANVAS_IN": "Lona dentro",
  "CHAT_CANVAS_OUT": "Lona afuera",
  "CHAT_PREV": "Prev",
  "CHAT_NEXT": "Proximo",
  "CHAT_LAYER": "Capa",
  "CHAT_AUDIO_VIDEO": "Audio/Video",
  "CHAT_TITLE_MUTE_UNMUTE_MIC": "Silenciar/Des Silenciar Microfono",
  "CHAT_MUTE_MIC": "Silenciar ",
  "CHAT_UNMUTE_MIC": "Des Silenciar",
  "CHAT_NO_MESSAGES": "No hay mensajes para mostrar.",
  "CHAT_SEND_MESSAGE": "Enviar",
  "CHAT_TYPE_MESSAGE": "Escriba su mensaje aquí...",
  "TITLE_CONTRIBUTORS": "Contribuyente",
  "MESSAGE_CONNECTION_UNTRUSTED": "Esta conexión no es de confianza.",
  "MESSAGE_TOGGLE_NAVIGATION": "Alternar la navegación",
  "BANDWIDTH_INFO": "Información de la amplitud de banda",
  "BANDWIDTH_INFO_INCOMING": "Entrante:",
  "BANDWIDTH_INFO_OUTGOING": "Saliente:",
  "BANDWIDTH_INFO_VIDEO_RES": "Resolución de vídeo:",
  "IN_CALL": "En llamada:",
  "LAST_CALL": " Última llamada:   ",
  "OPEN_NEW_WINDOW": "Abrir nueva Ventana",
  "CHANGE_LOGIN_INFO": "Cambiar la información de inicio de sesión",
  "LOGOUT": "Salir de sesión",
  "ABOUT": "Sobre",
  "HELP": "Ayuda",
  "CONTRIBUTORS": "Contribuyente",
  "TITLE_PREVIEW_SETTINGS": "Configuración de la Cámara y el Micrófono",
  "CAMERA_SETTINGS": "Cámara:",
  "MIC_SETTINGS": "Micrófono:",
  "SAVE": "Salvar",
  "LOADING": "Cargando",
  "ERRORS" : "Errores",
  "CALLING_TO": "Llamar a ",
  "CANCELLING": "Cancelando...",
  "DETERMINING_SPEED": "Determinación de la velocidad...",
  "CALL_HISTORY": "Historial de llamadas",
  "CLEAR_CALL_HISTORY": "Borrar Historial",
  "NO_CALL_HISTORY": "No Historial de llamadas.",
  "ENTER_EXTENSION": "Entre en una extensión",
  "CALL_EXTENSION": " Llamar extensión",
  "LOGIN": "Inicio de Sesión",
  "LOGIN_INFORMATION": "Información de Inicio de Sesión",
  "SAVE_LOGIN_INFORMATION": "Salvar Información de Inicio de Sesión",
  "INVALID_LOGIN_FIELDS": "Verifique los campos abajo e intente otra vez.",
  "NAME": "Nombre",
  "YOUR_NAME": "Su Nombre",
  "EMAIL": " El Correo Electrónico",
  "YOUR_EMAIL": "Su Correo Electrónico",
  "USER": "Usuario",
  "PASSWORD": "Contraseña",
  "CALLER_ID": "Identificador de llamadas",
  "HOSTNAME": "Hostname",
  "WEBSOCKET_URL": "Websocket URL",
  "SETTINGS": "Configuraciónes",
  "DEVICE_SETTINGS": "La configuración de usuario",
  "SHARE_DEVICE": "Compartir dispositivo",
  "SPEAKER": "Altavoz:",
  "SPEAKER_FEATURE": "Su navegador no parece apoyar esta función",
  "PREVIEW_SETTINGS": "Configuración de vista anticipada",
  "REFRESH_DEVICE_LIST": "Actualizar la lista de dispositivos",
  "GENERAL_SETTINGS": "Configuración general:",
  "USE_VIDEO": "Utilizar vídeo",
  "USE_STEREO_AUDIO": "Audio Estéreo",
  "USE_STUN": "Utilizar STUN",
  "SCALE_VIDEO": "Escala de vídeo remoto para que coincida con la resolución de la cámara",
  "ASK_BEFORE_RECOVER": "Preguntar antes de recuperar la llamada",
  "BEST_FRAME_RATE": "Mejor velocidad:",
  "AUDIO_SETTINGS": "Configuración de audio:",
  "ECHO_CANCEL": "Cancelación de eco",
  "NOISE_SUPPRESSION": "Supresión de Ruido",
  "HIGHPASS_FILTER": "Filtro de paso alto",
  "VIDEO_SETTINGS":  "Configuración de vídeo:",
  "REMOTE_ENCODER": "Codificador Remoto dedicado permitido.",
  "AUTO_SPEED_RES": "Determinar automáticamente la configuración de velocidad y resolución",
  "RECHECK_BANDWIDTH": "Compruebe de nuevo la amplitud de banda antes de cada llamada saliente",
  "CHECK_NETWORK_SPEED": "Compruebe la velocidad de la red",
  "VIDEO_QUALITY": "Calidad de video:",
  "MAX_INCOMING_BANDWIDTH": "Máxima amplitude banda entrante:",
  "MAX_OUTGOING_BANDWIDTH": "Máxima amplitude banda saliente:",
  "FACTORY_RESET": "Restablecimiento de fábrica",
  "SAVE_DEVICE_SETTINGS": "Guardar la Configuración del dispositivo ",
  "CHECK_RESOLUTION": "Comprobación de resolución.",
  "ERROR_RESOLUTION": "Error: la resolución de la comprobación de errores internos",
  "BROWSER_COMPATIBILITY": "Comprobar Compatibilidad de navegadores.",
  "REFRESH_MEDIA_DEVICES": "Actualizar dispositivos de medios.",
  "BROWSER_WITHOUT_WEBRTC": "Error: el navegador no soporta WebRTC.",
  "CHECK_PERMISSION_MEDIA": "Comprobación de permisos de los medios de comunicación",
  "CHECK_PROVISIONING_CONF": "Aprovisionamiento de configuración.",
  "CHECK_LOGIN": "Verifiicar inicio de sesión.",
  "CHECK_CONNECTION_SPEED": " Verificar la velocidad de conexión.",
  "ERROR_PERMISSION_MEDIA": "Error: permiso de medios negado",
  "ERROR_PROVISIONING_CONF": "Error: Provisión falló.",
  "PLEASE_WAIT": "Por favor espere...",
  "CANCEL": "Cancelar",
  "CHAT_TITLE_VOL_MINUS": "Volumen -",
  "CHAT_TITLE_VOL_PLUS": "Volumen +",
  "CHAT_TITLE_GAIN_MINUS": "Ganancia -",
  "CHAT_TITLE_GAIN_PLUS": "Ganancia +",
  "CHAT_VOL_MINUS": "Vol -",
  "CHAT_VOL_PLUS": "Vol +",
  "CHAT_GAIN_MINUS": "Ganancia -",
  "CHAT_GAIN_PLUS": "Ganancia +",
  "LANGUAGE": "Lengua:",
  "BROWSER_LANGUAGE": "Lengua del navegador",
  "BROWSER_SUPPORT_TITLE": "Navegador no compatible",
  "BROWSER_SUPPORT_TEXT": "El navegador que está utilizando no es apoyado por nuestro programa. Por favor, ver más abajo para navegador alternativo que puede utilizar. Una vez que haya elegido un navegador alternativo podrás acceder al enlace sesión de usarlo.",
  "BROWSER_NAME_EDGE": "Edge",
  "BROWSER_VERSIONS_EDGE": "Todas",
  "BROWSER_NAME_CHROME": "Chrome",
  "BROWSER_VERSIONS_CHROME": "Todas",
  "BROWSER_NAME_FIREFOX": "Firefox",
  "BROWSER_VERSIONS_FIREFOX": "Todas",
  "BROWSER_NAME_OPERA": "Opera",
  "BROWSER_VERSIONS_OPERA": "Todas",
  "MORE_SETTINGS": "Más Configuraciónes",
  "LESS_SETTINGS": "Menos Configuraciónes",
  "YOUR_PASSWORD": "Su Contraseña",
  "VERSION": "Versión: ",
  "GIT_REV": "Git Rev: ",
  "POWERED_BY": "Energizado por: ",
  "PREVIOUS": "Anterior",
  "SET_LAYOUT_POSITION": "Establecer posición de diseño.",
  "ENTER_LAYOUT_POSITION": "Por favor, introduzca posición de diseño .",
  "LAYOUT_POSITION": "posición de diseño",
  "DISCONNECTED": "Desconectado",
  "CONNECTING": "Conexión",
  "CONNECTED": "Conectado",
  "COM_STATUS": "estado de la comunicación.",
  "SCREEN_SHARE": "captura de pantalla",
  "PRESENTER": "Presentador",
  "WATCHING_CANVAS": "viendo la lona",
  "INPUT_CANVAS": "Lienzo de entrada",
  "CLEAR_ALERTS": "alertas claras",
  "NO_LOG": "hay datos de registro",
  "CLICK_DIAL": "Haga clic para marcar",
  "SETTINGS_LOGIN": "Entre para cambiar los ajustes",
  "SETTINGS_USER": "ajustes de usuario",
  "SETTINGS_USER_LOGIN": "Inicia sesión para cambiar la configuración del usuario",
  "MENU_INFO": "Menú de información",
  "CALL_FROM": "Llamada de:",
  "ANSWER": "Responder",
  "REJECT": "Rechazar",
  "ACTIVE": "activo",
  "PLEASE_ENTER": "Por favor, introduza un valor valido ",
  "VIEW_ALERT": "Ver registro de alertas ",
  "NO_CALL": "ninguna llamada"
};
module.exports = messages;
