// import React from 'react';

// class ImageFile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: "someUniqueId", // I would use this.props.id for a real world implementation
//       imageURI: null,
//     };
//   }

//   handleChange(e) {
//     this.readURI(e); // maybe call this with webworker or async library?
//     if (this.props.onChange !== undefined) {
//       this.props.onChange(e); // propagate to parent component
//     }
//   }

//   readURI(e) {
//     if (e.target.files && e.target.files[0]) {
//       let reader = new FileReader();
//       reader.onload = function (ev) {
//         this.setState({ imageURI: ev.target.result });
//       }.bind(this);
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   }

//   buildImgTag() {
//     let imgTag = null;
//     if (this.state.imageURI !== null) {
//       imgTag = (
//       <div className="row">
//         <div className="small-9 small-centered columns">
//           <img className="thumbnail" src={this.state.imageURI}></img>
//         </div>
//       </div>
//       );
//     }
//     return imgTag;
//   }

//   render() {
//     const imgTag = this.buildImgTag();

//     return (
//       <div>
//         <label htmlFor="fileInput" className="button">
//           Upload an image
//         </label>
//         <input
//           id="fileInput"
//           type="file"
//           onChange={this.handleChange.bind(this)}
//           className="show-for-sr"
//         />
//         {imgTag}
//       </div>
//     );
//   }
// }

// export default ImageFile;
