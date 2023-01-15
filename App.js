import {View, Text, Button} from 'react-native';
import React from 'react';
import reactNativeHTMLToPdf from 'react-native-html-to-pdf';

export default function App() {
  const generatePdf = async () => {
    const options = {
      html: `<h1 style='margin-bottom: 20px'>Heading</h1>
      <div style='text-align: justify'>Exercitation velit irure irure est nisi eu deserunt ut sunt eiusmod tempor aute esse ad. Id velit magna dolor occaecat fugiat cupidatat cillum eiusmod dolor exercitation laborum consequat sint. Amet incididunt voluptate dolor adipisicing laboris eiusmod nulla commodo consequat laborum in in. Est do do nisi incididunt occaecat enim quis occaecat ipsum et. Duis officia consequat veniam irure. Ad ad dolor velit aliquip nostrud. Ullamco irure tempor cupidatat laborum duis eu sit amet dolore id. Qui duis laboris aliqua occaecat ullamco dolor ipsum. Aute reprehenderit laboris nulla sit ea ex dolor et magna quis in ex. Irure pariatur veniam exercitation mollit dolor ex sit esse velit minim nisi. Amet adipisicing cillum labore esse commodo sunt. Ut cillum proident nulla elit anim ipsum irure commodo amet aliquip commodo consequat. Sit irure nisi cillum ullamco. Lorem occaecat in cupidatat nulla nulla nostrud pariatur aliqua anim aliqua ea Lorem. In reprehenderit sunt laboris ex ea adipisicing fugiat cillum est dolor anim ad. Lorem mollit nostrud culpa excepteur. Sint elit id anim esse magna est pariatur adipisicing.</div>

      <h1 style='margin-bottom: 20px'>Heading 2</h1>
      <div style='text-align: justify'>Exercitation velit irure irure est nisi eu deserunt ut sunt eiusmod tempor aute esse ad. Id velit magna dolor occaecat fugiat cupidatat cillum eiusmod dolor exercitation laborum consequat sint. Amet incididunt voluptate dolor adipisicing laboris eiusmod nulla commodo consequat laborum in in. Est do do nisi incididunt occaecat enim quis occaecat ipsum et. Duis officia consequat veniam irure. Ad ad dolor velit aliquip nostrud. Ullamco irure tempor cupidatat laborum duis eu sit amet dolore id. Qui duis laboris aliqua occaecat ullamco dolor ipsum. Aute reprehenderit laboris nulla sit ea ex dolor et magna quis in ex. Irure pariatur veniam exercitation mollit dolor ex sit esse velit minim nisi. Amet adipisicing cillum labore esse commodo sunt. Ut cillum proident nulla elit anim ipsum irure commodo amet aliquip commodo consequat. Sit irure nisi cillum ullamco. Lorem occaecat in cupidatat nulla nulla nostrud pariatur aliqua anim aliqua ea Lorem. In reprehenderit sunt laboris ex ea adipisicing fugiat cillum est dolor anim ad. Lorem mollit nostrud culpa excepteur. Sint elit id anim esse magna est pariatur adipisicing.</div>

      <h1 style='margin-bottom: 20px'>Heading 3</h1>
      <div style='text-align: justify'>Exercitation velit irure irure est nisi eu deserunt ut sunt eiusmod tempor aute esse ad. Id velit magna dolor occaecat fugiat cupidatat cillum eiusmod dolor exercitation laborum consequat sint. Amet incididunt voluptate dolor adipisicing laboris eiusmod nulla commodo consequat laborum in in. Est do do nisi incididunt occaecat enim quis occaecat ipsum et. Duis officia consequat veniam irure. Ad ad dolor velit aliquip nostrud. Ullamco irure tempor cupidatat laborum duis eu sit amet dolore id. Qui duis laboris aliqua occaecat ullamco dolor ipsum. Aute reprehenderit laboris nulla sit ea ex dolor et magna quis in ex. Irure pariatur veniam exercitation mollit dolor ex sit esse velit minim nisi. Amet adipisicing cillum labore esse commodo sunt. Ut cillum proident nulla elit anim ipsum irure commodo amet aliquip commodo consequat. Sit irure nisi cillum ullamco. Lorem occaecat in cupidatat nulla nulla nostrud pariatur aliqua anim aliqua ea Lorem. In reprehenderit sunt laboris ex ea adipisicing fugiat cillum est dolor anim ad. Lorem mollit nostrud culpa excepteur. Sint elit id anim esse magna est pariatur adipisicing.</div>

      <h1 style='margin-bottom: 20px'>Heading 4</h1>
      <ol>
        <li>Voluptate cupidatat aute officia exercitation anim duis.</li>
        <li>Non ea aliquip anim dolor dolor voluptate deserunt exercitation do.</li>
        <li>Adipisicing cupidatat excepteur ipsum laboris ex laboris cupidatat aliquip eiusmod id veniam anim est.</li>
        <ul>
          <li>Pariatur deserunt velit deserunt velit nisi ut minim laborum magna culpa.</li>
          <li>Proident proident nostrud dolore adipisicing anim duis amet nostrud exercitation ut deserunt eiusmod eiusmod deserunt.</li>
          <li>Proident sunt proident in quis ut consectetur non sunt ad eu id.</li>
        </ul>
      </ol>

      <a href="https://sgcodes.co.in" style="font-size: 34px">Click here</a>

      <h1 style='margin-bottom: 20px'>Heading 5</h1>
      <table border="1">
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </table>
      `,
      fileName: "html_to_pdf",
      directory: "Documents"
    }

    const file = await reactNativeHTMLToPdf.convert(options);
    console.log(file);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          marginVertical: 25,
          textAlign: 'center',
        }}>
        HTML to PDF
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Generate Pdf" onPress={generatePdf} />
      </View>
    </View>
  );
}
