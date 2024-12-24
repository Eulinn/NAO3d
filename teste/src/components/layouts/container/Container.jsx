import React from "react";
import Style from "./container.module.css";

class Container extends React.Component {
  render() {
    const classes = [
      Style.container,
      this.props['container-configuration'] ? Style['container-configuration'] : "",
      /*Flex*/
      this.props.f ? Style.f : "",
      this.props.f2 ? Style.f2 : "",
      this.props.f3 ? Style.f3 : "",
      this.props.wrap ? Style.wrap : "",

      /*Width*/
      this.props.w ? Style.w : "",
      this.props.w90 ? Style.w90 : "",
      this.props.w80 ? Style.w80 : "",
      this.props.w60 ? Style.w60 : "",
      this.props.w50 ? Style.w50 : "",
      this.props.view ? Style.view : "",
      this.props['h1'] ? Style['h1'] : "",
      this.props['h15'] ? Style['h15'] : "",
      this.props['h2'] ? Style['h2'] : "",
      this.props['h25'] ? Style['h25'] : "",
      this.props['h3'] ? Style['h3'] : "",
      this.props['hmax-3'] ? Style['hmax-3'] : "",
      this.props['h35'] ? Style['h35'] : "",
      this.props['h4'] ? Style['h4'] : "",
      this.props['hmax-4'] ? Style['hmax-4'] : "",
      this.props['h45'] ? Style['h45'] : "",
      this.props['hmax-45'] ? Style['hmax-45'] : "",


      /*Aligment*/
      this.props.c ? Style.c : "",
      this.props.jc ? Style.jc : "",
      this.props.jend ? Style.jend : "",
      this.props.jbetween ? Style.jbetween : "",
      this.props.ai ? Style.ai : "",
      this.props.aend ? Style.aend : "",
      this.props.abetween ? Style.abetween : "",
      this.props.cl ? Style.cl : "",
      this.props.jevenly ? Style.jevenly : "",
      this.props.aevenly ? Style.aevenly : "",
      this.props["cl-reverse"] ? Style["cl-reverse"] : "",

      this.props.gp5 ? Style.gp5 : "",
      this.props.gp10 ? Style.gp10 : "",
      this.props.gp15 ? Style.gp15 : "",
      this.props.gp20 ? Style.gp20 : "",
      this.props.scroll ? Style.scroll : "",

      /*Paddings */
      this.props.pd5 ? Style.pd5 : "",
      this.props.pd10 ? Style.pd10 : "",
      this.props.pd15 ? Style.pd15 : "",
      this.props.pd20 ? Style.pd20 : "",
      this.props["pdy-5"] ? Style["pdy-5"] : "",
      this.props["pdy-10"] ? Style["pdy-10"] : "",
      this.props["pdy-15"] ? Style["pdy-15"] : "",
      this.props["pdy-20"] ? Style["pdy-20"] : "",
      this.props["pdy-25"] ? Style["pdy-25"] : "",
      this.props["pdx-5"] ? Style["pdx-5"] : "",
      this.props["pdx-10"] ? Style["pdx-10"] : "",
      this.props["pdx-15"] ? Style["pdx-15"] : "",
      this.props["pdx-20"] ? Style["pdx-20"] : "",
      this.props["pdx-25"] ? Style["pdx-25"] : "",

      this.props.green ? Style.green : "",
      this.props.red ? Style.red : "",
      this.props.blue ? Style.blue : "",
      this.props.yellow ? Style.yellow : "",
      this.props.purple ? Style.purple : "",
      this.props.pink ? Style.pink : "",
      this.props.C1 ? Style.C1 : "",
      this.props.C2 ? Style.C2 : "",
      this.props['Black-4'] ? Style['Black-4'] : "",
      this.props['Black-5'] ? Style['Black-5'] : "",
      this.props['Black-6'] ? Style['Black-6'] : "",
      this.props['gradiente-up'] ? Style['gradiente-up'] : "",
      this.props['border-bottom'] ? Style['border-bottom'] : "",

      this.props.fixed ? Style.fixed : "",
      this.props.absolute ? Style.absolute : "",
      this.props.relative ? Style.relative : "",

      this.props.h ? Style.h : "",

      this.props.circular ? Style.circular : "",
      this.props["radius-1"] ? Style["radius-1"] : "",
      this.props["radius-2"] ? Style["radius-2"] : "",
      this.props["radius-3"] ? Style["radius-3"] : "",

      this.props.fundo ? Style.fundo : "",
      this.props.wfit ? Style.wfit : "",
      this.props.pointer ? Style.pointer : "",

      this.props["shadow-0"] ? Style["shadow-0"] : "",
      this.props["shadow-1"] ? Style["shadow-1"] : "",
      this.props["shadow-49"] ? Style["shadow-49"] : "",
      this.props["shadow-57"] ? Style["shadow-57"] : "",
      this.props["of-visible"] ? Style["of-visible"] : "",
      this.props["of-hidden"] ? Style["of-hidden"] : "",
      this.props["z-index1"] ? Style["z-index1"] : "",
      this.props["tst"] ? Style["tst"] : "",
      this.props["pd-homeDisposition"] ? Style["pd-homeDisposition"] : "",
      this.props["mg-homeDisposition"] ? Style["mg-homeDisposition"] : "",
      this.props["asp1-2"] ? Style["asp1-2"] : "",
      this.props["transition"] ? Style["transition"] : "",
      this.props["fade-out"] ? Style["fade-out"] : "",
    ].filter(Boolean);

    return (
      <div
        style={this.props.styleSheet}
        {...(this.props.id && { id: this.props.id })}
        {...(this.props.onClick && { onClick: this.props.onClick })}
        className={classes.join(" ")}
      >
        {this.props.children}
      </div>
    );
  }
}

Container.Hr = (props) => {
  const classes = [
    Style.hr,
    props["hr-1"] ? Style["hr-1"] : "",
    props["hr-2"] ? Style["hr-2"] : "",
    props["hr-3"] ? Style["hr-3"] : "",
  ].filter(Boolean);

  return <hr className={classes.join(" ")} />;
};

export default Container;
