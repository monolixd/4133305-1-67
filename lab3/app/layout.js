export default function Rootlayout({children}){
  return(
    <html>
      <body>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}