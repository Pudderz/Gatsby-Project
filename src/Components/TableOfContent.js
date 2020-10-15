import React, {useState, useEffect} from 'react'
import './tocStyles.scss'
function renderItems(items, activeId) {
    console.log(items);
    console.log(activeId);
    return (
      <ol>
        {items.map((item) => (
          <li key={item.url}>
            <a href={item.url}
            style={{
                color: activeId === item.url.slice(1) ? "white" : "grey",
              }}
            >{item.title}</a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        ))}
      </ol>
    );
  }
  
  function getIds(items) {
    return items.reduce((acc, item) => {
        console.log(item);
      if (item.url) {
          console.log(item.url)
          console.log(item.url.slice(1))
        // url has a # as first character, remove it to get just the id
        acc.push(item.url.slice(1));
      }
      if (item.items) {
        acc.push(...getIds(item.items));
      }
      return acc;
    }, []);
  }


  function useActiveId(idArray) {
    const [intersectingId, setIntersectingId] = useState();

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
                //changes intersecting id if intersecting
              setIntersectingId(entry.target.id);
            }
          });
        },
        { rootMargin: `0% 0% -80% 0%` }
      );
        
      idArray.forEach((id) => {
        observer.observe(document.getElementById(id));
      });

      return () => {
        idArray.forEach((id) => {
          observer.unobserve(document.getElementById(id));
        });

      };
    }, [idArray]);
    return intersectingId;
  }

export function TableOfContents(props) {
    const idArray = getIds(props.items);
    const activeId = useActiveId(idArray);
    console.log(activeId)
    return (
      <details>
        <summary>Table of Contents</summary>
        <ol>
            {renderItems(props.items, activeId)}
          {/* {props.items.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))} */}
        </ol>
      </details>
    );
  }


  export default TableOfContents