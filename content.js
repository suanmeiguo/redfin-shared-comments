url = location.href;
var is_match = url.match(/redfin\.com\/(.*?)\/(.*?)\/(.*?)\/home\/(\d*)/);
if (is_match == null) {
    console.log("Invalid Redfin URL format");
} else {
    var canonical_url = "https://" + is_match[0];
    var street = is_match[3], city = is_match[2], state = is_match[1], redfin_id = is_match[4];
    var unit = street.split("/")[1], street = street.split("/")[0];
    var address = street + (unit ? " " + unit : "") + ", " + is_match[2] + " " + is_match[1];
    console.log(redfin_id, canonical_url);

    // add disqus
    var disqus_config = function () {
        this.page.url = canonical_url;
        this.page.identifier = redfin_id;
    };
    (function() {
      // inject disqus
      var div = document.createElement('div'), c = document.getElementsByClassName("alongTheRail")[0];
      div.setAttribute('id', 'disqus_thread');
      div.setAttribute('style', 'padding-top: 10px');
      c.parentNode.insertBefore(div, c);

      // disqus code, do not modify
      var d = document, s = d.createElement('script');
      s.src = 'https://redfin-with-comments.disqus.com/embed.js';      
      s.setAttribute('data-timestamp', + new Date());
      (d.head || d.body).appendChild(s);
    })();
}