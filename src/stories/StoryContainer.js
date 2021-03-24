import React from "react";

const styles = { width:"100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: 'center' };

export const StoryContainer = (props) => <div style={styles} >{props.children}</div>