import React, { useState } from "react";
import { Tabs, Table } from "antd";
import "antd/dist/antd.css";
import PopoverButton from "./PopoverButton";
const { TabPane } = Tabs;

const columns = [
  {
    title: "Beseleme Alanları",
    key: "feedingPlace",
    dataIndex: "feedingPlace",
    width: 260,
    fixed: "left"
  },
  {
    onCell: (record, rowIndex) => {
      return {
        onClick: event => {}, // click row
        onDoubleClick: event => {}, // double click row
        onContextMenu: event => {}, // right button click row
        onMouseEnter: event => {
          console.log(record);
        }, // mouse enter row
        onMouseLeave: event => {} // mouse leave row
      };
    },
    title: "Pazartesi",
    key: "monday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "mondayMorning",
        key: "mondayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "mondayEvening",
        key: "mondayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Salı",
    key: "tuesday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "tuesdayMorning",
        key: "tuesdayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "tuesdayEvening",
        key: "tuesdayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Çarşamba",
    key: "wednesday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "wednesdayMorning",
        key: "wednesdayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "wednesdayEvening",
        key: "wednesdayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Perşembe",
    key: "thursday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "thursdayMorning",
        key: "thursdayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "thursdayEvening",
        key: "thursdayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Cuma",
    key: "friday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "fridayMorning",
        key: "fridayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "fridayEvening",
        key: "fridayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Cumartesi",
    key: "saturday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "saturdayMorning",
        key: "saturdayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "saturdayEvening",
        key: "saturdayEvening",
        width: 100
      }
    ]
  },
  {
    title: "Pazar",
    key: "sunday",
    width: 100,
    children: [
      {
        title: "Sabah",
        dataIndex: "sundayMorning",
        key: "sundayMorning",
        width: 100
      },
      {
        title: "Akşam",
        dataIndex: "sundayEvening",
        key: "sundayEvening",
        width: 100
      }
    ]
  }
];

const data = [
  {
    feedingPlace: "1. KSB-FEB ARKA BAH. (kedi)",
    mondayMorning: "Oğuzhan"
  },
  {
    feedingPlace: "2. ARI KAPI-SDKM (4 köpek)"
  },
  {
    feedingPlace: "3. ŞOK (4 köpek)"
  },
  {
    feedingPlace: "4. İNŞAAT-FANFAN (4 köpek)"
  },
  {
    feedingPlace: "5. YEMEKHANE-KÜTÜPHANE (2 köpek) "
  },
  {
    feedingPlace: "6. SELFİŞ (3 kedi)"
  },
  {
    feedingPlace: "7. DOLUNAY (kedi)"
  },
  {
    feedingPlace: "8. STADYUM (kedi)"
  },
  {
    feedingPlace: "9. KIZ YURTLARI (6 köpek)"
  },
  {
    feedingPlace: "10. SİMİT (3 köpek) -MİGROS (3 kedi)"
  },
  {
    feedingPlace: "11. MED (3 köpek)"
  },
  {
    feedingPlace: "12. EEB ARKA KANTİN (2 köpek, 2 kedi)"
  },
  {
    feedingPlace: "13. KİMYA - MADEN - ARI MOLA (    )"
  },
  {
    feedingPlace: "14. GEMİ İNŞ.(  köpek) KARŞISINDAKİ OTOPARK(  kedi)"
  },
  {
    feedingPlace: "15. BİG SLİCE (3 köpek)"
  },
  {
    feedingPlace: "16. GÖLET (KEDİ VE KÖPEK)"
  },
  {
    feedingPlace: "17. ARI-3 (ve karşısındaki yurt) (3 köpek)"
  },
  {
    feedingPlace: "18. İTÜ CAMİ"
  },
  {
    feedingPlace: "19. VADİ "
  },
  {
    feedingPlace: "20. ETİLER ÇIKIŞI (15 köpek)"
  }
];

const TableItem = e => {
  return (
    <td style={{ padding: "0" }}>
      <PopoverButton text={e.children[2]} e={e} />
    </td>
  );
};

const components = {
  body: {
    cell: TableItem
  }
};

const FeedingSchedule = () => {
  const [currentRow, setCurrentRow] = useState("none");
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="50. Hafta" key="1">
        <Table
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {}, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {
                console.log(record);
              }, // mouse enter row
              onMouseLeave: event => {} // mouse leave row
            };
          }}
          onCell={(record, rowIndex) => {
            return {
              onClick: event => {}, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {
                console.log(record);
              }, // mouse enter row
              onMouseLeave: event => {} // mouse leave row
            };
          }}
          components={components}
          columns={columns}
          dataSource={data}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 50%)", y: 240 }}
          onSelect={e => console.log(e)}
        />
      </TabPane>
    </Tabs>
  );
};

export default FeedingSchedule;
