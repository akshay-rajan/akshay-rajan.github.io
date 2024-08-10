import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";


export default function Pie({ setInfo }) {

  const data = [
    { 
      id: 0, 
      value: 33, 
      name: 'Software', 
      skills: [
        { name: 'Django', logo: "https://www.svgrepo.com/show/353657/django-icon.svg" },
        { name: 'React', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s" },
        { name: 'Python', logo: "https://i.pinimg.com/originals/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" },
        { name: 'Java', logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
        { name: 'JavaScript', logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: 'C', logo: "https://cdn.iconscout.com/icon/free/png-256/free-c-58-1175247.png" },
        { name: 'PHP', logo: "https://pngimg.com/uploads/php/small/php_PNG7.png" },
        { name: 'Motoko', logo: "https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1582790973231-Y6Y49DRMFQTDOL5F9T32/motoko-master-01.png?format=2500w" },
        { name: 'Rust', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/1200px-Rustacean-orig-noshadow.svg.png" },
        { name: 'Anchor', logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
        { name: 'Sass', logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" },
        { name: 'TypeScript', logo: "https://cdn-icons-png.flaticon.com/256/919/919832.png" },
        { name: 'Postman', logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" },
        { name: 'SQL', logo: "https://icons.veryicon.com/png/o/application/designer-icon/sql-5.png" },
        { name: 'MongoDB', logo: "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" },
        { name: 'MySQL', logo: "https://w7.pngwing.com/pngs/841/331/png-transparent-mysql-database-phpmyadmin-postgresql-innodb-mysql-orange-logo-area-thumbnail.png" },
        { name: 'jQuery', logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg" },
        { name: 'XAMPP', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBr8B8nBG3QP5UIoWaS7xNXhXHrKAkmLsZA&s" },
        { name: 'Bootstrap', logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
        { name: 'Flask', logo: "https://cms-assets.tutsplus.com/uploads/users/30/posts/16037/preview_image/flask.png" },
        { name: 'Haskell', logo: "https://i.pinimg.com/originals/06/53/a2/0653a2a7b86d7be59dd1738c4ce88096.png" },
      ]
    },
    { 
      id: 1, 
      value: 33, 
      name: 'AI',
      skills: [
        { name: 'Machine Learning', logo: "https://cdn-icons-png.freepik.com/512/8365/8365406.png" },
        { name: 'Data Visualization', logo: "https://static.vecteezy.com/system/resources/thumbnails/001/187/079/small/chart.png" },
        { name: 'Deep Learning', logo: "https://cdn-icons-png.flaticon.com/512/8637/8637101.png" },
        { name: 'Algorithms', logo: "https://cdn-icons-png.flaticon.com/512/10061/10061724.png" },
        { name: 'numpy', logo: "https://user-images.githubusercontent.com/50221806/86498208-af4bfe00-bd39-11ea-88fa-c747ae0ddd85.png" },
        { name: 'pandas', logo: "https://pandas.pydata.org/static/img/favicon_white.ico" },
        { name: 'matplotlib', logo: "https://pydata.org/wp-content/uploads/2016/07/matplotlib-logo-300.png" },
        { name: 'seaborn', logo: "https://user-images.githubusercontent.com/315810/92159303-30d41100-edfb-11ea-8107-1c5352202571.png" },
        { name: 'scikit-learn', logo: "https://avatars.githubusercontent.com/u/17349883?s=280&v=4" },
        { name: 'Jupyter', logo: "https://raw.githubusercontent.com/jithurjacob/vscode-nbpreviewer/master/images/jupyter.png" },
      ],
    },
    { 
      id: 2, 
      value: 33, 
      name: 'DevOps',
      skills: [
        { name: 'Linux', logo: "https://seeklogo.com/images/L/Linux_Tux-logo-DA252F3C21-seeklogo.com.png" },
        { name: 'Docker', logo: "https://cdn-icons-png.flaticon.com/512/5969/5969124.png" },
        { name: 'Git', logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: 'VirtualBox', logo: "https://styles.redditmedia.com/t5_7sqfde/styles/communityIcon_ix7q9wstcxna1.png" },
        { name: 'Nginx', logo: "https://iconape.com/wp-content/png_logo_vector/nginx.png" },
        { name: 'Ansible', logo: "https://docs.ansible.com/ansible/2.9/_static/images/logo_invert.png" },
        { name: 'Wireshark', logo: "https://cdn.icon-icons.com/icons2/1495/PNG/512/wireshark_103123.png" },
        { name: 'Networking', logo: "https://static.vecteezy.com/system/resources/thumbnails/018/923/768/small_2x/timeline-diagram-template-png.png" },
      ],
    },
  ];
  
  return (
    <div className="pie-div" >
      <PieChart
        colors={['wheat', '#ffccff', '#ccffff']}
        series={[
            {
              data,
              paddingAngle: 5,
              innerRadius: 50,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              arcLabel: (item) => `${item.name}`,
              highlightScope: { 
                faded: 'global', 
                highlighted: 'item' 
              },
              faded: { 
                innerRadius: 30, 
                additionalRadius: -30, 
                color: 'grey',
              },
              highlighted: { 
                innerRadius: 50, 
                additionalRadius: 10, 
            },
        }]}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {
            fill: 'black',
            fontSize: 12,
            fontWeight: 'bold',
            },
        }}
        tooltip={{ enabled: false }}
        height={330}
        onHighlightChange={(item) => {
          if (item) {
            setInfo(data[item.dataIndex].skills);
          } 
        }}
      />
  </div>
  );
}

