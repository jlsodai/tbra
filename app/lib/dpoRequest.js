const parseString = require("xml2js").parseString;
let token;
export async function dpoRequest(amount, title) {
  let date = new Date()
  
  const myHeaders = new Headers();
  myHeaders.set("Content-Type", "application/xml");
  
  const invoiceDate = [date.getFullYear(), date.getMonth(), date.getDate()].join('-')

	const res = await fetch("https://secure.3gdirectpay.com/API/v6/", {
    // cache: "no-store",
    method: "post",
    headers: myHeaders,
    mode: "no-cors",
    body: `
    <?xml version="1.0" encoding="utf-8"?>
    <API3G>
      <CompanyToken>${process.env.DPO_TOKEN}</CompanyToken>
      <Request>createToken</Request>
      <Transaction>
      <PaymentAmount>${amount}</PaymentAmount>
      <PaymentCurrency>USD</PaymentCurrency>
      <CompanyRef>${process.env.DPO_REF}</CompanyRef>
      <RedirectURL>${process.env.DPO_SUCCESS}</RedirectURL>
      <BackURL>${process.env.DPO_FAILURE}</BackURL>
      <CompanyRefUnique>0</CompanyRefUnique>
      <PTL>56</PTL>
      </Transaction>
      <Services>
        <Service>
          <ServiceType>38693</ServiceType>
          <ServiceDescription>${title}</ServiceDescription>
          <ServiceDate>${invoiceDate}</ServiceDate>
        </Service>
      </Services>
    </API3G>`,
  });

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

  parseString(await res.text(), function (err, result) {
    token = result.API3G.TransToken[0];
  })

	return token;
    
}
