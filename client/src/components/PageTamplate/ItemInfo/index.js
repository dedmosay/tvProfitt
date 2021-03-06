import React from "react";
import StepperImage from "../../StepperImage";
import "./ItemInfo.scss";
export default function ItemInfo(props) {
  let ArrImg = [];

  if (props.img_1 !== "" && props.img_1 !== undefined ) {
    ArrImg.push({ imgPath: props.img_1, label: props.img_label_1 });
  } 
  if (props.img_2 !== "" && props.img_2 !== undefined) {
    ArrImg.push({ imgPath: props.img_2, label: props.img_label_2 });
  } 
  if (props.img_3 !== "" && props.img_3 !== undefined) {
    ArrImg.push({ imgPath: props.img_3, label: props.img_label_3 });
  } 
  if (props.img_4 !== "" && props.img_4 !== undefined) {
    ArrImg.push({ imgPath: props.img_4, label: props.img_label_4 });
  } 
  if (props.img_5 !== "" && props.img_5 !== undefined) {
    ArrImg.push({ imgPath: props.img_5, label: props.img_label_5 });
  } 
  if (props.img_6 !== "" && props.img_6 !== undefined) {
    ArrImg.push({ imgPath: props.img_6, label: props.img_label_6 });
  } 
  return (
    <div className="ItemInfo">
      <div className="ItemInfo__container">
        <div className="ItemInfo__header">
          <div className="ItemInfo__header_content">
            <div className="ItemInfo__header_content-name">{props.name}</div>

            <div className="ItemInfo__header_content-name2">{props.name2}</div>
            <div className="ItemInfo__header_content-type">{props.type}</div>
            <div className="ItemInfo__header_content-text">
              {props.definition}
            </div>
          </div>
        </div>
        <div className="ItemInfo__image">
          <StepperImage tutorialSteps={ArrImg}/>
        </div>

        {/* <div className="ItemInfo__description ">
            <div className="ItemInfo__header">{props.description}</div>
            <div className="ItemInfo__description_item">
              {props.description_1}
            </div>
            <div className="ItemInfo__description_item">
              {props.description_2}
            </div>
            <div className="ItemInfo__description_item">
              {props.description_3}
            </div>
            <div className="ItemInfo__description_item">
              {props.description_4}
            </div>
          </div> */}
        {/* <div className="ItemInfo__properties ">
            <div className="ItemInfo__header">{props.properties}</div>
            <div className="ItemInfo__properties_item">
              {props.properties_1}
            </div>
            <div className="ItemInfo__properties_item">
              {props.properties_2}
            </div>
            <div className="ItemInfo__properties_item">
              {props.properties_3}
            </div>
            <div className="ItemInfo__properties_item">
              {props.properties_4}
            </div> 
          </div>*/}
        {/* <div className="ItemInfo__apply">
              <div className="ItemInfo__header">{props.applying}</div>
              <div className="ItemInfo__apply_item">{props.applying_1}</div>
              <div className="ItemInfo__apply_item">{props.applying_2}</div>
              <div className="ItemInfo__apply_item">{props.applying_3}</div>
              <div className="ItemInfo__apply_item">{props.applying_4}</div>
              <div className="ItemInfo__apply_item">{props.applying_5}</div>
              <div className="ItemInfo__apply_item">{props.applying_6}</div>
            </div> */}

        <div className="ItemInfo__spec">
          <div className="ItemInfo__spec_content">
            <div className="ItemInfo__spec_content-header">
              {props.specifications}
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_1}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_1_1}</div>
              <div>{props.item_1_2}</div>
              <div>{props.item_1_3}</div>
              <div>{props.item_1_4}</div>
              <div>{props.item_1_5}</div>
              <div>{props.item_1_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_2}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_2_1}</div>
              <div>{props.item_2_2}</div>
              <div>{props.item_2_3}</div>
              <div>{props.item_2_4}</div>
              <div>{props.item_2_5}</div>
              <div>{props.item_2_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_3}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_3_1}</div>
              <div>{props.item_3_2}</div>
              <div>{props.item_3_3}</div>
              <div>{props.item_3_4}</div>
              <div>{props.item_3_5}</div>
              <div>{props.item_3_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_4}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_4_1}</div>
              <div>{props.item_4_2}</div>
              <div>{props.item_4_3}</div>
              <div>{props.item_4_4}</div>
              <div>{props.item_4_5}</div>
              <div>{props.item_4_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_5}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_5_1}</div>
              <div>{props.item_5_2}</div>
              <div>{props.item_5_3}</div>
              <div>{props.item_5_4}</div>
              <div>{props.item_5_5}</div>
              <div>{props.item_5_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_6}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_6_1}</div>
              <div>{props.item_6_2}</div>
              <div>{props.item_6_3}</div>
              <div>{props.item_6_4}</div>
              <div>{props.item_6_5}</div>
              <div>{props.item_6_6}</div>
            </div>
          </div>
        </div>
        <div className="ItemInfo__positive">
          <div className="ItemInfo__positive_content">
            <div className="ItemInfo__positive_content-header">
              {props.positive}
            </div>
            <div className="ItemInfo__positive_content-item">
              <div>{props.positive_1}</div>
              <div>{props.positive_2}</div>
              <div>{props.positive_3}</div>
              <div>{props.positive_4}</div>
              <div>{props.positive_5}</div>
              <div>{props.positive_6}</div>
              <div>{props.positive_7}</div>
              <div>{props.positive_8}</div>
              <div>{props.positive_9}</div>
              <div>{props.positive_10}</div>
            </div>
          </div>
        </div>

        <div className="ItemInfo__code">
          <div className="ItemInfo__code_content">
            <div className="ItemInfo__code_content-header">
              {props.code_order}
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_1}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_1}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_2}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_2}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_3}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_3}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_4}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_4}
              </div>
            </div>
            {/* <button>
              <div className="ItemInfo__btn">{props.order}</div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
