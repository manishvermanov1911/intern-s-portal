import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const ACSTree = () => {
  const cyRef = useRef(null);

  useEffect(() => {
    const cy = cytoscape({
      container: cyRef.current,

      layout: {
        name: 'preset'
      },

      style: [
        {
          selector: 'node',
          style: {
            'background-fit': 'cover',
            'background-image': 'data(img)',
            'label': 'data(label)',
            'text-valign': 'bottom',
            'text-halign': 'center',
            'text-wrap': 'wrap',
            'width': 50,
            'height': 50,
            'font-size': '9px',
            'text-margin-y': 5
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#aaa',
            'target-arrow-color': '#aaa',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        },
        {
          selector: 'edge.secondary-link',
          style: {
            'line-style': 'dashed',
            'curve-style': 'bezier',
            'target-arrow-color': '#5AA9E6',
            'target-arrow-shape': 'triangle',
            'width': 2
          }
        }
      ],

      elements: {
        nodes: [
  // Level 1
  { data: { id: 'a', label: 'Pentareddy', img: 'pics/penta.jpg' }, position: { x: 400, y: 50 } },

  // Level 2
  { data: { id: 'y', label: 'Surya', img: 'pics/surya.jpg' }, position: { x: 400, y: 150 } },

  // Level 3
  { data: { id: 'f', label: 'Debashish', img: 'pics/deb.jpg' }, position: { x: 400, y: 250 } },

  // Level 4 (spread evenly)
  { data: { id: 'm', label: 'Rayna', img: 'pics/rayna.jpg' }, position: { x: 50, y: 350 } },
  { data: { id: 'n', label: 'Suhani', img: 'pics/suhani.jpg' }, position: { x: 150, y: 350 } },
  { data: { id: 'o', label: 'Saicharan', img: 'pics/sai.jpg' }, position: { x: 250, y: 350 } },
  { data: { id: 'p', label: 'Shrighanesh', img: 'pics/sriganesh.jpg' }, position: { x: 350, y: 350 } },
  { data: { id: 'q', label: 'Manya', img: 'pics/manya.jpg' }, position: { x: 450, y: 350 } },
  { data: { id: 'r', label: 'Amitoj', img: 'pics/amitoj.jpg' }, position: { x: 550, y: 350 } },
  { data: { id: 's', label: 'Vijaya', img: 'pics/vijaya.jpg' }, position: { x: 650, y: 350 } },
  { data: { id: 't', label: 'Thanishk', img: 'pics/Thanishk.jpg' }, position: { x: 750, y: 350 } },
  { data: { id: 'u', label: 'Samanvi', img: 'pics/samanavi.jpg' }, position: { x: 850, y: 350 } },
  { data: { id: 'v', label: 'Raghav', img: 'pics/raghav.jpg' }, position: { x: 950, y: 350 } },
  { data: { id: 'w', label: 'Athitya', img: 'pics/athitya.png' }, position: { x: 1050, y: 350 } },
  { data: { id: 'x', label: 'Riya', img: 'pics/riya.png' }, position: { x: 1150, y: 350 } }
]
,
        edges: [
  { data: { source: 'a', target: 'y' } }, // Pentareddy -> Surya
  { data: { source: 'y', target: 'f' } }, // Surya -> Debashish

  // All below report to Debashish
  { data: { source: 'f', target: 'm' } }, // Debashish -> Rayna
  { data: { source: 'f', target: 'n' } }, // Debashish -> Suhani
  { data: { source: 'f', target: 'o' } }, // Debashish -> Saicharan
  { data: { source: 'f', target: 'p' } }, // Debashish -> Shrighanesh
  { data: { source: 'f', target: 'q' } }, // Debashish -> Manya
  { data: { source: 'f', target: 'r' } }, // Debashish -> Amitoj
  { data: { source: 'f', target: 's' } }, // Debashish -> Vijaya
  { data: { source: 'f', target: 't' } }, // Debashish -> Thanishk
  { data: { source: 'f', target: 'u' } }, // Debashish -> Samanvi
  { data: { source: 'f', target: 'v' } }, // Debashish -> Raghav
  { data: { source: 'f', target: 'w' } }, // Debashish -> Athitya
  { data: { source: 'f', target: 'x' } }  // Debashish -> Riya
]


      
        
      }
    });

    return () => {
      cy.destroy();
    };
  }, []);

  return (
    <div
      ref={cyRef}
      id="cy"
      style={{ width: '100%', height: '600px', backgroundColor: '#f9f9f9' }}
    />
  );
};

export default ACSTree;
