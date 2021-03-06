#pragma once
#include "net\packet.h"
#include "..\ProtocolBase.h"
#include "..\ProtocolDefine.h"
#include "coredefine.h"

class ResponseP2PPacket : public ClientPacket
{
public:
	ResponseP2PPacket(Event const& _event)
		:ClientPacket(ROOM_RESPONSE_P2P_REQ, _event.param0), 
			enmType((core::ENM_ResponseP2PType)_event.param1), unSrcUIN(_event.param2){};

	void Pack()
	{
		HeadBusiness();
		*this<<(uint8)enmType<<unSrcUIN;
		if(enmType == core::RESPONSEP2PTYPE_ACCEPT)
		{
			byte* p = new byte[8];
			*(uint32*)p = enmType;
			*(uint32*)(p+4) = unSrcUIN;
			ClientPacket::SetAttachData((uint32)p);
		}		
		TailBusiness();
	}

	uint32 unSrcUIN;
	core::ENM_ResponseP2PType enmType;
};

//////////////////////////////////////////////////////////////////////////

class ResponseP2PRspPacket : public ServerPacket
{
public:
	ResponseP2PRspPacket(ByteBuf & buf, uint32 unseq, core::ResponseP2PRspEvent& _event)
		:ServerPacket(buf), seq(unseq), stEvent(_event){};

	void Unpack()
	{
		ServerPacket::Unpack();
		uint32 result=0;
		*this>>result;
		stEvent.enmResult = (core::ENM_ConnectP2PResult)result;

		byte* p = (byte*)ClientPacket::GetAttachData(seq);
		if(p != NULL)
		{
			stEvent.enmType = (core::ENM_ResponseP2PType)(*(uint32*)p);
			stEvent.unDstUIN = (*(uint32*)(p+4));
			delete[] p;
		}
		else
		{
			assert(0);
			stEvent.unDstUIN = 0;
		}		
	}

	core::ResponseP2PRspEvent& stEvent;

private:
	uint32 seq;
};

//////////////////////////////////////////////////////////////////////////

class ResponseP2PNotifyPacket : public ServerPacket
{
public:
	ResponseP2PNotifyPacket(ByteBuf & buf, ResponseP2PNotifyEvent& _event)
		:ServerPacket(buf), stEvent(_event){};

	void Unpack()
	{
		ServerPacket::Unpack();
		uint8 unType=0;
		*this>>unType>>stEvent.unSrcUIN;
		stEvent.enmType = (core::ENM_ResponseP2PType)unType;
		if(stEvent.enmType == core::RESPONSEP2PTYPE_ACCEPT)
		{
			*this>>stEvent.unDstUIN;
		}
	}

	core::ResponseP2PNotifyEvent& stEvent;
};

//////////////////////////////////////////////////////////////////////////