class LinkedIn {
  event(conversionId) {
    const img = new Img()
    img.src = `https://dc.ads.linkedin.com/collect/?pid=${this.partnerID}&conversionId=${conversionId}&fmt=gif`
  }

  constructor(id) {
    this.partnerID = id
    linkedinInit(this.partnerID)
  }
}

export default LinkedIn

/* eslint-disable */
function linkedinInit(_linkedin_partner_id) {
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);

  (function(){var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);})();  
}
/* eslint-enable */
