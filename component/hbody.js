import parse from "html-react-parser";
export default function Hbody({ hcontent }) {
  return (
    <>
      {hcontent.map((items, index) => {
        
        return (<div className="card">
            <h1>{items.title}</h1>
          <div key={index} className="card-body">
            {items.text_content === null || items.text_content === ""
              ? parse("<h3 className='text-danger'> No information Available</h3>")
              : parse(items.text_content)}
          </div>
          </div>
        );
      })}
    </>
  );
}
