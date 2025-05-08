import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone/esm/vis-network';

const SkillTreeCanvas = () => {
  const visJsRef = useRef(null);
  const [network, setNetwork] = useState(null);
  const [coursesData, setCoursesData] = useState([]);

  // Fetch course data from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/courses') // Assuming backend runs on port 5000
      .then(res => res.json())
      .then(data => {
        setCoursesData(data);
      })
      .catch(error => console.error("Failed to fetch courses:", error));
  }, []);

  useEffect(() => {
    if (visJsRef.current && coursesData.length > 0) {
      // If a network instance already exists, destroy it before creating a new one
      // This prevents issues if coursesData changes and the effect re-runs.
      if (network) {
        network.destroy();
        setNetwork(null); // Clear the state
      }

      // Prepare nodes and edges for vis-network
      const nodes = coursesData.map(course => ({
        id: course.id,
        label: `${course.id}\n${course.name}`,
        title: course.description,
        group: course.type, // For potential styling later
      }));

      const edges = [];
      coursesData.forEach(course => {
        if (course.unlocks) {
          course.unlocks.forEach(unlockedCourseId => {
            edges.push({
              from: course.id,
              to: unlockedCourseId,
              arrows: 'to',
            });
          });
        }
        // More complex prerequisite logic (like course.prerequisiteLogic) can be handled here later
        // For now, using simple `unlocks` for directed graph. If `unlocks` isn't present, 
        // one could also infer edges from `prerequisites` by reversing the direction.
      });

      const data = { nodes, edges };

      const options = {
        layout: {
          hierarchical: {
            enabled: true,
            levelSeparation: 150,
            nodeSpacing: 100,
            treeSpacing: 200,
            direction: 'LR', // Left to Right, suitable for skill trees
            sortMethod: 'directed', // Sort based on the direction of edges
          },
        },
        physics: {
          enabled: false, // Disable physics for hierarchical layout initially
        },
        nodes: {
          shape: 'box',
          margin: 10,
          font: {
            size: 12,
            face: 'Arial',
          },
          borderWidth: 1,
        },
        edges: {
          smooth: true,
          color: '#848484',
          arrows: {
            to: { enabled: true, scaleFactor: 0.5 },
          },
        },
        interaction: {
          dragNodes: true,
          dragView: true,
          zoomView: true,
        },
        height: '100%', // Fill container
        width: '100%',
      };

      const net = new Network(visJsRef.current, data, options);
      setNetwork(net);
    }

    // Cleanup function: still important to destroy network when component unmounts
    // or before the effect re-runs if data changes leading to a new network instance.
    return () => {
      // This check is now more crucial if the network is destroyed above
      // However, the primary cleanup on unmount is still handled by the network state variable.
      if (network && visJsRef.current) { // Check visJsRef.current to ensure it's not called after unmount if network is not null
         // network.destroy(); // This might be redundant if destroyed above, or can cause issues if called twice.
         // Let's rely on the network state being set to null and the main destroy logic.
      }
    };
  }, [visJsRef, coursesData]); // Corrected dependency array

  return (
    <div ref={visJsRef} style={{ height: '600px', width: '100%', border: '1px solid lightgray' }} />
  );
};

export default SkillTreeCanvas; 