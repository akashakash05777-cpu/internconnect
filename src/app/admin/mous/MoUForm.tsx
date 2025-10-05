'use client';

import { useState, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save } from 'lucide-react';
import { MoU } from '@/types';
import { format } from 'date-fns';

interface MoUFormProps {
  mou: MoU | null;
  onSubmit: (data: any) => void;
}

export default memo(function MoUForm({ mou, onSubmit }: MoUFormProps) {
  const [formData, setFormData] = useState({
    title: mou?.title || '',
    scopeOfWork: mou?.scopeOfWork || '',
    companyName: mou?.companyName || '',
    internshipType: mou?.internshipType || 'onsite',
    startDate: mou?.startDate ? format(mou.startDate, 'yyyy-MM-dd') : '',
    endDate: mou?.endDate ? format(mou.endDate, 'yyyy-MM-dd') : '',
    credits: mou?.credits || 4,
    slots: mou?.slots || 10,
    mentorDetails: {
      name: mou?.mentorDetails?.name || '',
      email: mou?.mentorDetails?.email || '',
      designation: mou?.mentorDetails?.designation || '',
      phone: mou?.mentorDetails?.phone || ''
    },
    status: mou?.status || 'draft'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const processedData = {
      ...formData,
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      credits: parseInt(formData.credits.toString()),
      slots: parseInt(formData.slots.toString()),
      version: 1,
      versionHistory: [],
      signatures: {
        industry: { signed: false, signedAt: null, signedBy: '' },
        college: { signed: false, signedAt: null, signedBy: '' }
      }
    };
    onSubmit(processedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="details">Internship Details</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">MoU Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Summer Internship Program 2024"
                required
              />
            </div>
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                placeholder="e.g., TechCorp Solutions"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="scopeOfWork">Scope of Work</Label>
            <Textarea
              id="scopeOfWork"
              value={formData.scopeOfWork}
              onChange={(e) => setFormData(prev => ({ ...prev, scopeOfWork: e.target.value }))}
              placeholder="Detailed description of the scope of work..."
              rows={4}
              required
            />
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="internshipType">Internship Type</Label>
              <Select value={formData.internshipType} onValueChange={(value) => setFormData(prev => ({ ...prev, internshipType: value as any }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="onsite">Onsite</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as any }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending_signatures">Pending Signatures</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="expiring">Expiring</SelectItem>
                  <SelectItem value="terminated">Terminated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="credits">Credits</Label>
              <Input
                id="credits"
                type="number"
                value={formData.credits}
                onChange={(e) => setFormData(prev => ({ ...prev, credits: parseInt(e.target.value) }))}
                min="1"
                max="20"
                required
              />
            </div>
            <div>
              <Label htmlFor="slots">Available Slots</Label>
              <Input
                id="slots"
                type="number"
                value={formData.slots}
                onChange={(e) => setFormData(prev => ({ ...prev, slots: parseInt(e.target.value) }))}
                min="1"
                max="100"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Mentor Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mentorName">Mentor Name</Label>
                <Input
                  id="mentorName"
                  value={formData.mentorDetails.name}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    mentorDetails: { ...prev.mentorDetails, name: e.target.value }
                  }))}
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="mentorEmail">Mentor Email</Label>
                <Input
                  id="mentorEmail"
                  type="email"
                  value={formData.mentorDetails.email}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    mentorDetails: { ...prev.mentorDetails, email: e.target.value }
                  }))}
                  placeholder="email@company.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="mentorDesignation">Designation</Label>
                <Input
                  id="mentorDesignation"
                  value={formData.mentorDetails.designation}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    mentorDetails: { ...prev.mentorDetails, designation: e.target.value }
                  }))}
                  placeholder="e.g., Senior Developer"
                  required
                />
              </div>
              <div>
                <Label htmlFor="mentorPhone">Phone</Label>
                <Input
                  id="mentorPhone"
                  value={formData.mentorDetails.phone}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    mentorDetails: { ...prev.mentorDetails, phone: e.target.value }
                  }))}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => onSubmit({})}>
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          {mou ? 'Update MoU' : 'Create MoU'}
        </Button>
      </div>
    </form>
  );
});
