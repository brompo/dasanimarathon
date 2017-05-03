import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Open Sans', sans-serif",
        "fontSize": 14,
        "lineHeight": 24,
        "color": "#666",
        "backgroundColor": "#fff"
    },
    "h1": {
        "color": "#333"
    },
    "h2": {
        "color": "#333",
        "fontSize": 45,
        "marginBottom": 20
    },
    "h3": {
        "color": "#333",
        "fontSize": 18
    },
    "h4": {
        "color": "#333"
    },
    "h5": {
        "color": "#333"
    },
    "h6": {
        "color": "#333"
    },
    "spantitle": {
        "color": "#028fcc",
        "fontSize": 50,
        "fontWeight": "700"
    },
    "spantitlelowercase": {
        "textTransform": "lowercase",
        "fontSize": 80
    },
    "parallax": {
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "backgroundAttachment": "fixed",
        "color": "#fff"
    },
    "li": {
        "textAlign": "left"
    },
    "parallax h1": {
        "color": "#fff"
    },
    "parallax h2": {
        "color": "#fff"
    },
    "parallax h3": {
        "color": "#fff"
    },
    "parallax h4": {
        "color": "#fff"
    },
    "parallax h5": {
        "color": "#fff"
    },
    "parallax h6": {
        "color": "#fff"
    },
    "parallax input[type=\"text\"]": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"text\"]:hover": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"email\"]": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"email\"]:hover": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"url\"]": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"url\"]:hover": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"password\"]": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax input[type=\"password\"]:hover": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax textarea": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "parallax textarea:hover": {
        "fontWeight": "300",
        "color": "#fff"
    },
    "logoimage": {
        "height": "8pc",
        "marginTop": -17
    },
    "btn": {
        "border": 0,
        "borderRadius": 0
    },
    "btnbtn-primary:hover": {
        "backgroundColor": "#017fb5"
    },
    "navbar-nav li a:hover": {
        "outline": "none",
        "outlineOffset": 0,
        "textDecoration": "none",
        "background": "transparent"
    },
    "navbar-nav li a:focus": {
        "outline": "none",
        "outlineOffset": 0,
        "textDecoration": "none",
        "background": "transparent"
    },
    "a": {
        "textDecoration": "none",
        "WebkitTransition": "300ms",
        "MozTransition": "300ms",
        "OTransition": "300ms",
        "transition": "300ms"
    },
    "a:focus": {
        "textDecoration": "none",
        "outline": "none"
    },
    "a:hover": {
        "textDecoration": "none",
        "outline": "none"
    },
    "section": {
        "paddingTop": 90,
        "paddingRight": 0,
        "paddingBottom": 90,
        "paddingLeft": 0
    },
    "challenges heading": {
        "paddingTop": 90
    },
    "heading": {
        "paddingBottom": 45
    },
    "miniheading": {
        "paddingTop": 45,
        "paddingRight": 0,
        "paddingBottom": 45,
        "paddingLeft": 0
    },
    "preloader": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "zIndex": 999999,
        "background": "#fff"
    },
    "preloader > i": {
        "position": "absolute",
        "fontSize": 36,
        "lineHeight": 36,
        "top": "50%",
        "left": "50%",
        "height": 36,
        "width": 36,
        "marginTop": -15,
        "marginLeft": -15,
        "display": "inline-block"
    },
    "home-slider": {
        "overflow": "hidden",
        "position": "relative"
    },
    "home-slider caption": {
        "position": "absolute",
        "top": "45%",
        "marginTop": -104,
        "left": 0,
        "right": 0,
        "textAlign": "center",
        "textTransform": "uppercase",
        "zIndex": 15,
        "fontSize": 18,
        "fontWeight": "300",
        "color": "#fff"
    },
    "home-slider caption h1": {
        "color": "#fff",
        "fontSize": 60,
        "fontWeight": "700",
        "marginBottom": 30
    },
    "caption btn-start": {
        "color": "#fff",
        "fontSize": 14,
        "fontWeight": "600",
        "paddingTop": 14,
        "paddingRight": 40,
        "paddingBottom": 14,
        "paddingLeft": 40,
        "border": "1px solid #6e6d6c",
        "borderRadius": 4,
        "marginTop": 40
    },
    "caption btn-start:hover": {
        "color": "#fff"
    },
    "carousel-fade carousel-inner item": {
        "opacity": 0,
        "WebkitTransitionProperty": "opacity",
        "transitionProperty": "opacity",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "height": 2037
    },
    "carousel-fade carousel-inner item:after": {
        "content": " ",
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "background": "rgba(0,0,0,.7)"
    },
    "carousel-fade carousel-inner active": {
        "opacity": 1
    },
    "carousel-fade carousel-inner activeleft": {
        "left": 0,
        "opacity": 0,
        "zIndex": 1
    },
    "carousel-fade carousel-inner activeright": {
        "left": 0,
        "opacity": 0,
        "zIndex": 1
    },
    "carousel-fade carousel-inner nextleft": {
        "opacity": 1
    },
    "carousel-fade carousel-inner prevright": {
        "opacity": 1
    },
    "carousel-fade carousel-control": {
        "zIndex": 2
    },
    "left-control": {
        "position": "absolute",
        "top": "50%",
        "height": 51,
        "width": 51,
        "lineHeight": 48,
        "borderRadius": "50%",
        "border": "1px solid #fff",
        "zIndex": 20,
        "fontSize": 24,
        "color": "#fff",
        "textAlign": "center",
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "MsTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "transition": "all 0.5s ease",
        "left": -51
    },
    "right-control": {
        "position": "absolute",
        "top": "50%",
        "height": 51,
        "width": 51,
        "lineHeight": 48,
        "borderRadius": "50%",
        "border": "1px solid #fff",
        "zIndex": 20,
        "fontSize": 24,
        "color": "#fff",
        "textAlign": "center",
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "MsTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "transition": "all 0.5s ease",
        "right": -51
    },
    "left-control:hover": {
        "color": "#fff"
    },
    "right-control:hover": {
        "color": "#fff"
    },
    "home-slider:hover left-control": {
        "left": 30
    },
    "home-slider:hover right-control": {
        "right": 30
    },
    "home-slider fa-angle-down": {
        "position": "absolute",
        "left": "50%",
        "bottom": 50,
        "color": "#fff",
        "display": "inline-block",
        "width": 24,
        "marginLeft": -12,
        "fontSize": 24,
        "lineHeight": 24,
        "zIndex": 999,
        "WebkitAnimation": "bounce 3000ms infinite",
        "animation": "bounce 3000ms infinite"
    },
    "navbar-right li a": {
        "color": "#fff",
        "textTransform": "uppercase",
        "fontSize": 14,
        "fontWeight": "600",
        "paddingTop": 30,
        "paddingBottom": 30
    },
    "navbar-right liactive a": {
        "backgroundColor": "rgba(0,0,0,.2)"
    },
    "navbar-brand h1": {
        "marginTop": 5
    },
    "service-icon": {
        "borderRadius": 4,
        "color": "#fff",
        "display": "inline-block",
        "fontSize": 36,
        "height": 90,
        "lineHeight": 90,
        "width": 90,
        "WebkitTransition": "background-color 0.2s ease",
        "transition": "background-color 0.2s ease"
    },
    "our-services col-sm-4:hover service-icon": {
        "backgroundColor": "#333"
    },
    "our-services col-sm-4": {
        "borderRight": "1px solid #f2f2f2",
        "borderBottom": "1px solid #f2f2f2",
        "paddingBottom": 50
    },
    "our-services col-sm-4:nth-child(4)": {
        "borderBottom": 0,
        "paddingTop": 60
    },
    "our-services col-sm-4:nth-child(5)": {
        "borderBottom": 0,
        "paddingTop": 60
    },
    "our-services col-sm-4:nth-child(6)": {
        "borderBottom": 0,
        "paddingTop": 60,
        "borderRight": 0
    },
    "our-services col-sm-4:nth-child(3)": {
        "borderRight": 0
    },
    "service-info h3": {
        "marginTop": 35,
        "fontSize": 2
    },
    "about-us": {
        "backgroundImage": "url(../images/about-bg.jpg)",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0
    },
    "about-us h2": {
        "marginTop": 0,
        "color": "#fff"
    },
    "about-us lead": {
        "fontSize": 16,
        "marginBottom": 10
    },
    "about-us h1": {
        "marginBottom": 30
    },
    "progress": {
        "height": 20,
        "backgroundColor": "#fff",
        "borderRadius": 0,
        "boxShadow": "none",
        "WebkitBoxShadow": "none",
        "marginBottom": 25
    },
    "progress-bar": {
        "boxShadow": "none",
        "WebkitBoxShadow": "none",
        "textAlign": "right",
        "paddingRight": 12,
        "fontSize": 12,
        "fontWeight": "600"
    },
    "progress progress-barsix-sec-ease-in-out": {
        "WebkitTransition": "width 2s ease-in-out",
        "transition": "width 2s ease-in-out"
    },
    "portfolio container-fluid": {
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "portfolio col-sm-3": {
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "portfolio folio-item": {
        "position": "relative"
    },
    "portfolio overlay": {
        "backgroundColor": "#000",
        "color": "#fff",
        "left": 0,
        "right": 0,
        "bottom": "-100%",
        "height": 0,
        "position": "absolute",
        "textAlign": "center",
        "opacity": 0,
        "WebkitTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out"
    },
    "overlay overlay-content": {
        "display": "table",
        "height": "100%",
        "width": "100%"
    },
    "overlay overlay-text": {
        "display": "table-cell",
        "verticalAlign": "middle"
    },
    "overlay folio-info": {
        "opacity": 0,
        "marginBottom": 75,
        "marginTop": -75,
        "WebkitTransition": "all 1s ease-in-out",
        "transition": "all 1s ease-in-out"
    },
    "overlay folio-info h3": {
        "marginTop": 0,
        "color": "#fff"
    },
    "folio-overview a": {
        "fontSize": 18,
        "color": "#333",
        "height": 50,
        "width": 50,
        "lineHeight": 50,
        "borderRadius": "50%",
        "backgroundColor": "#fff",
        "display": "inline-block",
        "marginTop": 20,
        "marginRight": 5
    },
    "folio-overview a:hover": {
        "color": "#fff"
    },
    "folio-overview folio-expand": {
        "marginTop": -500,
        "marginLeft": -500,
        "WebkitTransition": "all 0.8s ease-in-out",
        "transition": "all 0.8s ease-in-out"
    },
    "folio-image": {
        "WebkitTransition": "all 0.8s ease-in-out",
        "transition": "all 0.8s ease-in-out"
    },
    "portfolio folio-item:hover folio-image": {
        "WebkitTransform": "scale(1.5) rotate(-15deg)",
        "transform": "scale(1.5) rotate(-15deg)"
    },
    "folio-image img": {
        "width": "100%"
    },
    "portfolio folio-item:hover overlay": {
        "opacity": 0.8,
        "bottom": 0,
        "height": "100%"
    },
    "portfolio folio-item:hover folio-overview folio-expand": {
        "marginTop": 0,
        "marginLeft": 0
    },
    "portfolio folio-item:hover overlay folio-info": {
        "opacity": 1,
        "marginBottom": 0,
        "marginTop": 0
    },
    "single-portfolio": {
        "paddingTop": 90,
        "paddingRight": 0,
        "paddingBottom": 90,
        "paddingLeft": 0,
        "background": "#f5f5f5",
        "position": "relative"
    },
    "single-portfolio img": {
        "width": "100%",
        "marginBottom": 10
    },
    "single-portfolio close-folio-item": {
        "position": "absolute",
        "top": 30,
        "fontSize": 34,
        "width": 34,
        "height": 34,
        "left": "50%",
        "color": "#999",
        "marginLeft": -17
    },
    "team": {},
    "team-members": {
        "marginBottom": 25
    },
    "social-icons": {
        "marginTop": 30,
        "textAlign": "center"
    },
    "social-icons ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline-block"
    },
    "social-icons ul li": {
        "float": "left",
        "marginRight": 8
    },
    "social-icons ul li:last-child": {
        "marginRight": 0
    },
    "social-icons ul li a": {
        "color": "#fff",
        "backgroundColor": "#d9d9d9",
        "height": 36,
        "width": 36,
        "lineHeight": 36,
        "display": "block",
        "fontSize": 16,
        "opacity": 0.8
    },
    "social-icons ul li a:hover": {
        "opacity": 1,
        "WebkitTransform": "scale(1.2)",
        "transform": "scale(1.2)"
    },
    "team-member": {
        "textAlign": "center",
        "color": "#333",
        "fontSize": 14
    },
    "team-member:hover social-icons ul li afacebook": {
        "backgroundColor": "#3b5999"
    },
    "team-member:hover social-icons ul li atwitter": {
        "backgroundColor": "#2ac6f7"
    },
    "team-member:hover social-icons ul li adribbble": {
        "backgroundColor": "#ff5b92"
    },
    "team-member:hover social-icons ul li alinkedin": {
        "backgroundColor": "#036dc0"
    },
    "team-member:hover social-icons ul li arss": {
        "backgroundColor": "#ff6b00"
    },
    "team img-responsive": {
        "width": "100%"
    },
    "member-info h3": {
        "marginTop": 35
    },
    "member-info h4": {
        "fontSize": 14,
        "marginBottom": 15,
        "color": "#999"
    },
    "features": {
        "textAlign": "center",
        "backgroundImage": "url(../images/features-bg.jpg)"
    },
    "features i": {
        "fontSize": 48
    },
    "features h3": {
        "marginTop": 15,
        "fontSize": 30,
        "marginBottom": 7,
        "color": "#fff"
    },
    "features slider-overlay": {
        "opacity": 0.8
    },
    "pricing-table": {
        "textAlign": "center"
    },
    "single-table": {
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "border": "1px solid #f2f2f2"
    },
    "single-table h3": {
        "marginTop": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 18,
        "textTransform": "uppercase",
        "marginBottom": 30
    },
    "price": {
        "fontSize": 36,
        "lineHeight": 36
    },
    "price span": {
        "fontSize": 14,
        "lineHeight": 14
    },
    "single-table ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "single-table ul li": {
        "lineHeight": 30
    },
    "single-tablefeatured": {
        "color": "#fff"
    },
    "single-tablefeatured h3": {
        "color": "#fff"
    },
    "single-tablefeatured btnbtn-primary": {
        "backgroundColor": "#fff"
    },
    "twitter": {
        "backgroundImage": "url(../images/twitter-bg.jpg)"
    },
    "twitter > div": {
        "textAlign": "center",
        "position": "relative"
    },
    "twitter-carousel": {
        "position": "relative",
        "zIndex": 15
    },
    "twitter-icon": {
        "position": "relative",
        "zIndex": 15,
        "color": "#fff"
    },
    "twitter-icon fa-twitter": {
        "fontSize": 24,
        "height": 64,
        "width": 64,
        "lineHeight": 65,
        "borderRadius": "50%",
        "position": "relative"
    },
    "twitter-icon fa-twitter:after": {
        "position": "absolute",
        "content": "",
        "borderWidth": 8,
        "borderStyle": "solid",
        "left": 24,
        "bottom": -14
    },
    "twitter-carousel item": {
        "paddingTop": 0,
        "paddingRight": 55,
        "paddingBottom": 0,
        "paddingLeft": 55
    },
    "twitter-carousel item a": {
        "color": "#fff"
    },
    "twitter-icon h4": {
        "textTransform": "uppercase",
        "marginTop": 25,
        "marginBottom": 25,
        "color": "#fff"
    },
    "twitter-left-control": {
        "position": "absolute",
        "top": "50%",
        "color": "#fff",
        "border": "1px solid #fafafa",
        "height": 34,
        "width": 34,
        "lineHeight": 31,
        "marginTop": -17,
        "fontSize": 18,
        "borderRadius": "50%",
        "zIndex": 15,
        "left": 80
    },
    "twitter-right-control": {
        "position": "absolute",
        "top": "50%",
        "color": "#fff",
        "border": "1px solid #fafafa",
        "height": 34,
        "width": 34,
        "lineHeight": 31,
        "marginTop": -17,
        "fontSize": 18,
        "borderRadius": "50%",
        "zIndex": 15,
        "right": 80
    },
    "twitter-left-control:hover": {
        "color": "#fff"
    },
    "twitter-right-control:hover": {
        "color": "#fff"
    },
    "post-thumb": {
        "position": "relative"
    },
    "post-icon": {
        "position": "absolute",
        "top": 10,
        "right": 10,
        "height": 30,
        "width": 30,
        "lineHeight": 30,
        "borderRadius": 4,
        "textAlign": "center",
        "color": "#fff",
        "fontSize": 12
    },
    "post-meta": {
        "position": "absolute",
        "bottom": 15,
        "left": 15,
        "color": "#fff",
        "fontSize": 12,
        "textTransform": "uppercase",
        "fontWeight": "600"
    },
    "post-meta span": {
        "marginRight": 16
    },
    "post-carousel carousel-indicators": {
        "bottom": 3,
        "left": "90%"
    },
    "blog-left-control": {
        "position": "absolute",
        "top": "45%",
        "width": 30,
        "textAlign": "center",
        "color": "rgba(255,255,255,.7)",
        "fontSize": 36,
        "left": 0
    },
    "blog-right-control": {
        "position": "absolute",
        "top": "45%",
        "width": 30,
        "textAlign": "center",
        "color": "rgba(255,255,255,.7)",
        "fontSize": 36,
        "right": 0
    },
    "blog-left-control:hover": {
        "color": "#fff"
    },
    "blog-right-control:hover": {
        "color": "#fff"
    },
    "entry-header h3 a": {
        "lineHeight": 30
    },
    "entry-header date": {
        "display": "inline-block",
        "fontSize": 11,
        "fontWeight": "600",
        "marginBottom": 30,
        "textTransform": "uppercase",
        "position": "relative"
    },
    "entry-header cetagory": {
        "display": "inline-block",
        "fontSize": 11,
        "fontWeight": "600",
        "marginBottom": 30,
        "textTransform": "uppercase",
        "position": "relative"
    },
    "entry-header date:after": {
        "content": "",
        "position": "absolute",
        "left": 0,
        "bottom": -22,
        "width": 20,
        "height": 3
    },
    "entry-content": {
        "fontSize": 14
    },
    "load-more": {
        "display": "block",
        "textAlign": "center",
        "marginTop": 70
    },
    "btn-loadmore": {
        "border": "1px solid #f2f2f2",
        "color": "#666666",
        "fontSize": 14,
        "fontWeight": "600",
        "paddingTop": 15,
        "paddingRight": 125,
        "paddingBottom": 15,
        "paddingLeft": 125,
        "textTransform": "uppercase"
    },
    "btn-loadmore:hover": {
        "color": "#fff"
    },
    "contact": {
        "paddingTop": 45,
        "paddingBottom": 0
    },
    "google-map": {
        "height": 350
    },
    "contact-us": {
        "backgroundImage": "url(../images/contact-bg.jpg)",
        "paddingBottom": 90
    },
    "contact-us heading": {
        "paddingTop": 95
    },
    "form-control": {
        "backgroundColor": "transparent",
        "borderColor": "rgba(255,255,255,.1)",
        "height": 50,
        "borderRadius": 0,
        "boxShadow": "none"
    },
    "textareaform-control": {
        "minHeight": 180,
        "resize": "none"
    },
    "form-group": {
        "marginBottom": 30
    },
    "contact-info": {
        "paddingLeft": 70,
        "fontWeight": "300"
    },
    "uladdress": {
        "marginTop": 0,
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "contact-info ul li": {
        "marginBottom": 8
    },
    "contact-info ul li a": {
        "color": "#fff"
    },
    "btn-submit": {
        "display": "block",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "width": "100%",
        "color": "#fff",
        "border": 0,
        "marginTop": 40
    },
    "footer": {
        "color": "#fff"
    },
    "footer-top": {
        "position": "relative",
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "footer footer-bottom": {
        "backgroundColor": "#fff",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "footer footer-bottom a:hover": {
        "textDecoration": "underline"
    },
    "footer-logo": {
        "display": "inline-block",
        "marginBottom": 5
    },
    "footer social-icons": {
        "marginTop": 15
    },
    "footer social-icons ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer social-icons ul li a": {
        "backgroundColor": "rgba(0,0,0,.2)",
        "borderRadius": 4,
        "lineHeight": 33
    },
    "footer social-icons ul li a:hover": {
        "color": "#fff"
    },
    "footer social-icons ul li aenvelope:hover": {
        "backgroundColor": "#CECB26"
    },
    "footer social-icons ul li afacebook:hover": {
        "backgroundColor": "#3b5999"
    },
    "footer social-icons ul li atwitter:hover": {
        "backgroundColor": "#2ac6f7"
    },
    "footer social-icons ul li adribbble:hover": {
        "backgroundColor": "#ff5b92"
    },
    "footer social-icons ul li alinkedin:hover": {
        "backgroundColor": "#036dc0"
    },
    "footer social-icons ul li atumblr:hover": {
        "backgroundColor": "#ff6b00"
    }
});