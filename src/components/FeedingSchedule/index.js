import React, { useState, useEffect, useContext } from "react";
import { Tabs, Table, Checkbox, Typography } from "antd";
import "antd/dist/antd.css";
import { withFirebase } from "../Firebase";
import { UserContext } from "../Auth/UserContext";
const { TabPane } = Tabs;
const { Text } = Typography;

const initialTableData = [
  { feedingPlace: "1. KSB-FEB ARKA BAH. (kedi)" },
  { feedingPlace: "2. ARI KAPI-SDKM (4 köpek)" },
  { feedingPlace: "3. ŞOK (4 köpek)" },
  { feedingPlace: "4. İNŞAAT-FANFAN (4 köpek)" },
  { feedingPlace: "5. YEMEKHANE-KÜTÜPHANE (2 köpek)" },
  { feedingPlace: "6. SELFİŞ (3 kedi)" },
  { feedingPlace: "7. DOLUNAY (kedi)" },
  { feedingPlace: "8. STADYUM (kedi)" },
  { feedingPlace: "9. KIZ YURTLARI (6 köpek)" },
  { feedingPlace: "10. SİMİT (3 köpek) -MİGROS (3 kedi)" },
  { feedingPlace: "11. MED (3 köpek)" },
  { feedingPlace: "12. EEB ARKA KANTİN (2 köpek, 2 kedi)" },
  { feedingPlace: "13. KİMYA - MADEN - ARI MOLA" },
  { feedingPlace: "14. GEMİ İNŞ.(köpek) KARŞISINDAKİ OTOPARK(kedi)" },
  { feedingPlace: "15. BİG SLİCE (3 köpek)" },
  { feedingPlace: "16. GÖLET (KEDİ VE KÖPEK)" },
  { feedingPlace: "17. ARI-3 (ve karşısındaki yurt) (3 köpek)" },
  { feedingPlace: "18. İTÜ CAMİ" },
  { feedingPlace: "19. VADİ" },
  { feedingPlace: "20. ETİLER ÇIKIŞI (15 köpek)" }
];

const DaysEnum = {
  mondayMorning: "114",
  mondayEvening: "120",
  tuesdayMorning: "214",
  tuesdayEvening: "220",
  wednesdayMorning: "314",
  wednesdayEvening: "320",
  thursdayMorning: "414",
  thursdayEvening: "420",
  fridayMorning: "514",
  fridayEvening: "520",
  saturdayMorning: "614",
  saturdayEvening: "620",
  sundayMorning: "714",
  sundayEvening: "720"
};
Object.freeze(DaysEnum);

const FeedingScheduleBase = props => {
  const [tableData, setTableData] = useState([]);
  const [user] = useContext(UserContext);
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    props.firebase.database
      .collection("feeding")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          setTableData(doc.data().rowData);
        });
      });
  }, [props.firebase.database]);

  useEffect(() => {
    if (!props.editMode && !firstRender) {
      console.log("im writiiiiiiiing");
      props.firebase.database
        .collection("feeding")
        .doc("1")
        .set({ rowData: tableData });
    }
    //FIXME: Bad Solution
    setFirstRender(false);
    // eslint-disable-next-line
  }, [props.editMode]);

  const handleRender = (Text, dataIndex) => {
    if (Text !== undefined) {
      let returnValue = <div></div>;
      let currentTime = new Date();
      let day = currentTime.getDay();
      if (day === 0) {
        day = 7;
      }
      let hour = currentTime.getHours();
      const currentDateToCompare = day.toString() + hour.toString();
      returnValue = Text.map(item => {
        if (!item.appState) {
          if (item.name === user.data.name) {
            return (
              <div key={item.name} style={{ color: "#b5b5b5" }}>
                {item.name}
              </div>
            );
          } else {
            return null;
          }
        } else {
          return (
            <div key={item.name}>
              <div style={{ color: "#000000", display: "inline" }}>
                {item.name}
              </div>
              {item.feedingState && (
                <div style={{ color: "#3db535", display: "inline" }}>
                  {" \u2713"}
                </div>
              )}
              {!item.feedingState &&
                DaysEnum[dataIndex] < currentDateToCompare && (
                  <div style={{ color: "#ff1717", display: "inline" }}>
                    {" \u2717"}
                  </div>
                )}
            </div>
          );
        }
      });
      return <div>{returnValue}</div>;
    } else return null;
  };

  const columns = [
    {
      title: "Besleme Bölgeleri",
      key: "feedingPlace",
      dataIndex: "feedingPlace",
      width: 260,
      fixed: "left"
    },
    {
      title: "Pazartesi",
      key: "monday",
      width: 100,
      children: [
        {
          title: "Sabah",
          dataIndex: "mondayMorning",
          key: "mondayMorning",
          width: 100,
          align: "center",
          render: text => handleRender(text, "mondayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "mondayEvening",
          key: "mondayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "mondayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "tuesdayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "tuesdayEvening",
          key: "tuesdayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "tuesdayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "wednesdayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "wednesdayEvening",
          key: "wednesdayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "wednesdayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "thursdayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "thursdayEvening",
          key: "thursdayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "thursdayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "fridayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "fridayEvening",
          key: "fridayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "fridayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "saturdayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "saturdayEvening",
          key: "saturdayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "saturdayEvening")
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
          width: 100,
          align: "center",
          render: text => handleRender(text, "sundayMorning")
        },
        {
          title: "Akşam",
          dataIndex: "sundayEvening",
          key: "sundayEvening",
          width: 100,
          align: "center",
          render: text => handleRender(text, "sundayEvening")
        }
      ]
    }
  ];

  const handleCheckBoxChange = e => {
    let id = e.target.id;
    id = id.split(",");
    const rowIndex = id[1];
    const columnKey = id[0];
    if (e.target.checked) {
      console.log(tableData[1]);
      if (tableData[rowIndex][columnKey] === undefined) {
        const volun = [];
        volun.push({
          name: user.data.name,
          appState: false,
          feedingState: false
        });
        tableData[rowIndex][columnKey] = volun;
      } else {
        const newVolun = {
          name: user.data.name,
          appState: false,
          feedingState: false
        };
        tableData[rowIndex][columnKey].push(newVolun);
      }
    } else {
      tableData[rowIndex][columnKey].pop();
      if (tableData[rowIndex][columnKey].length === 0) {
        delete tableData[rowIndex][columnKey];
      }
    }
  };

  const TableItem = props => {
    if (props.idb !== undefined) {
      const { record } = props.idb.props;
      if (record[props.idb.key] !== undefined) {
        if (props.idb.key === "feedingPlace") {
          return (
            <td>
              <Text style={{ margin: "5% 0px" }}>{record.feedingPlace}</Text>
            </td>
          );
        } else {
          console.log(
            tableData[props.rowid][props.idb.key].find(
              item => item.name === user.data.name
            )
          );
          if (
            tableData[props.rowid][props.idb.key] !== undefined &&
            tableData[props.rowid][props.idb.key].length < 2 &&
            tableData[props.rowid][props.idb.key].find(
              item => item.name === user.data.name
            ) === undefined
          ) {
            return (
              <td>
                <Checkbox
                  style={{ margin: "0px 45%" }}
                  disabled={false}
                  id={props.idb.key + "," + props.rowid}
                  onChange={e => handleCheckBoxChange(e)}
                />
              </td>
            );
          } else {
            return (
              <td>
                <Checkbox
                  style={{ margin: "0px 45%" }}
                  disabled={true}
                  id={props.idb.key + "," + props.rowid}
                />
              </td>
            );
          }
        }
      } else {
        return (
          <td>
            <Checkbox
              id={props.idb.key + "," + props.rowid}
              style={{ margin: "0px 45%" }}
              onChange={e => handleCheckBoxChange(e)}
            />
          </td>
        );
      }
    } else {
      return null;
    }
  };

  const TableRow = props => {
    console.log(props);
    return (
      <tr>
        <TableItem idb={props.children[0]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[1]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[2]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[3]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[4]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[5]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[6]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[7]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[8]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[9]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[10]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[11]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[12]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[13]} rowid={props["data-row-key"]} />
        <TableItem idb={props.children[14]} rowid={props["data-row-key"]} />
      </tr>
    );
  };

  const components = {
    body: {
      row: TableRow
    }
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="50. Hafta" key="1">
        <Table
          components={props.editMode === true ? components : undefined}
          columns={columns}
          dataSource={tableData}
          loading={!tableData.length}
          bordered
          size="middle"
          scroll={{ x: "calc(700px + 50%)", y: 240 }}
          onSelect={e => console.log(e)}
          pagination={false}
          rowKey={record => record.feedingPlace}
        />
      </TabPane>
    </Tabs>
  );
};

const FeedingSchedule = withFirebase(FeedingScheduleBase);
export default FeedingSchedule;
