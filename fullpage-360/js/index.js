
$(function(){
  // ȫ����ʼ��
  $('#dowebok').fullpage({
    // ����ÿһ���ı�����ɫ
    sectionsColor:['red','blue','hotpink','#123456','#000'],
    //��������ĳһ�����ִ��
    afterLoad:function(anchorLink,index){
      //console.log(index);
      //������ĳһ���󣬸�������
      $('.section').removeClass('current');
      //�����һ������ʱû����Ч�� ʹ�ö�ʱ��
      setTimeout(function(){
        $('.section').eq(index-1).addClass('current');
      },100);
    }

  });
});